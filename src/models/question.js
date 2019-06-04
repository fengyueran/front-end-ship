import { forEach, random } from 'lodash-es';

const defaultState = {
  currentQuestion: null,
  questionById: {},
  questions: []
};
const question = {
  state: defaultState,
  reducers: {
    initQuestions: (state, data) => {
      if (data) {
        const { allIds, byId } = data;
        const formatedQuestions = [];
        forEach(allIds, (id, index) => {
          const qt = byId[id];
          qt.number = index + 1;
          formatedQuestions.push(qt);
        });
        return { ...state, questionById: byId, questions: formatedQuestions };
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
    }
  })
};

export default question;
