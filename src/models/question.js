import { forEach } from 'lodash-es';

const defaultState = {
  currentQuestion: null,
  questionsObj: {},
  questions: []
};
const question = {
  state: defaultState,
  reducers: {
    initQuestions: (state, data) => {
      if (data) {
        const { questionsId, questionsObj } = data;
        const formatedQuestions = [];
        forEach(questionsId, (id, index) => {
          const qt = questionsObj[id];
          qt.number = index + 1;
          formatedQuestions.push(qt);
        });
        return { ...state, questionsObj, questions: formatedQuestions };
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
    }
  })
};

export default question;
