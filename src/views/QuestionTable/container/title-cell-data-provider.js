import { connect } from 'react-redux';

const mapDispatch = ({ question: { setCurrentQuestion } }) => ({
  setCurrentQuestion
});

const withData = WrappedComponent => {
  const container = connect(
    null,
    mapDispatch
  )(WrappedComponent);
  return container;
};
export default withData;
