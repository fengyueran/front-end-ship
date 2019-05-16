import { connect } from 'react-redux';

const mapState = state => ({
  currentQuestion: state.question.currentQuestion
});

const withData = WrappedComponent => {
  const container = connect(mapState)(WrappedComponent);
  return container;
};
export default withData;
