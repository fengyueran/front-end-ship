import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = state => ({
  currentQuestion: state.question.currentQuestion
});

const mapDispatch = ({ question: { submitQuestion } }) => ({
  submitQuestion
});

const withData = WrappedComponent => {
  const propTypes = {
    executeCode: PropTypes.func.isRequired,
    toggleConsole: PropTypes.func.isRequired,
    currentQuestion: PropTypes.object.isRequired,
    submitQuestion: PropTypes.func.isRequired
  };

  const Wrapper = ({
    currentQuestion,
    submitQuestion,
    executeCode,
    toggleConsole
  }) => {
    return (
      <WrappedComponent
        currentQuestion={currentQuestion}
        submitQuestion={submitQuestion}
        toggleConsole={toggleConsole}
        executeCode={executeCode}
      />
    );
  };

  Wrapper.propTypes = propTypes;

  const Container = connect(mapState, mapDispatch)(Wrapper);

  return React.memo(Container);
};

export default withData;
