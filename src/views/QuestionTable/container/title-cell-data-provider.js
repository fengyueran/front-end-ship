import { connect } from 'react-redux';

const mapDispatch = ({ question: { updateQuestionParam } }) => ({
  updateQuestionParam
});

const withData = WrappedComponent => {
  const container = connect(
    null,
    mapDispatch
  )(WrappedComponent);
  return container;
};
export default withData;
