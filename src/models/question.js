import { forEach, random } from 'lodash-es';
import client from 'src/webapi';

const defaultState = {
  currentQuestion: null,
  questionById: {},
  questions: [],
  record: {
    unfinished: [],
    finished: []
  },
  isFullScreen: false
};
const question = {
  state: defaultState,
  reducers: {
    initQuestions: (state, data) => {
      if (data) {
        const { record, questions } = data;
        const { allIds, byId } = questions;
        const formatedQuestions = [];
        forEach(allIds, (id, index) => {
          const qt = byId[id];
          qt.number = index + 1;
          formatedQuestions.push(qt);
        });
        return {
          ...state,
          questionById: byId,
          questions: formatedQuestions,
          record
        };
      }
      return state;
    },
    updateQuestionParam: (state, params) => ({
      ...state,
      ...params
    })
  },
  effects: () => ({
    nextQuestion(payload, state) {
      const { currentQuestion, questions } = state.question;
      const { number } = currentQuestion;
      if (number < questions.length) {
        const targetQuestion = questions[number];
        this.updateQuestionParam({ currentQuestion: targetQuestion });
      }
    },
    preQuestion(payload, state) {
      const { currentQuestion, questions } = state.question;
      const { number } = currentQuestion;
      if (number >= 2) {
        const targetQuestion = questions[number - 2];
        this.updateQuestionParam({ currentQuestion: targetQuestion });
      }
    },
    randomQuestion(payload, state) {
      const { questions } = state.question;
      const number = random(0, questions.length - 1);
      const targetQuestion = questions[number];
      this.updateQuestionParam({ currentQuestion: targetQuestion });
    },
    getQuestionData(payload, state) {
      const { id, type } = payload;
      let getData = client.getQuestionHtml;
      if (type === 'answer') getData = client.getAnswerHtml;
      getData(id).then(data => {
        if (data) {
          const { questionById } = state.question;
          let currentQuestion = questionById[id];
          currentQuestion = { ...currentQuestion, [type]: data };
          questionById[id] = currentQuestion;
          this.updateQuestionParam({
            questionById,
            currentQuestion
          });
        }
      });
    },
    toggleFullScreen(payload, state) {
      const { isFullScreen } = state.question;
      this.updateQuestionParam({ isFullScreen: !isFullScreen });
    }
  })
};

export default question;
