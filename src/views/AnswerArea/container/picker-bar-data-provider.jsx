import { connect } from 'react-redux';

const mapState = state => ({
  questionsTotal: state.question.questions.length,
  currentQustionNum: state.question.currentQuestion.number
});

const mapDispatch = ({
  question: { nextQuestion, preQuestion, randomQuestion }
}) => ({
  nextQuestion,
  preQuestion,
  randomQuestion
});

const withData = WrappedComponent => {
  const Container = connect(
    mapState,
    mapDispatch
  )(WrappedComponent);
  return Container;
};

export default withData;
