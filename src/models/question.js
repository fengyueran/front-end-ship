const defaultState = {
  currentQuestion: null
};
const question = {
  state: defaultState,
  reducers: {
    setCurrentQuestion: (state, currentQuestion) => ({
      ...state,
      currentQuestion
    })
  }
};

export default question;
