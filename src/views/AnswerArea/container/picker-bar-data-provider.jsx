import { connect } from 'react-redux';

const mapState = state => ({
  questionsTotal: state.question.questionIds.length,
  currentQustion: state.question.currentQuestion
});

const mapDispatch = ({
  question: { nextQuestion, preQuestion, randomQuestion, submitQuestion }
}) => ({
  nextQuestion,
  preQuestion,
  randomQuestion,
  submitQuestion
});

const withData = WrappedComponent => {
  const Container = connect(mapState, mapDispatch)(WrappedComponent);
  return Container;
};

export default withData;
