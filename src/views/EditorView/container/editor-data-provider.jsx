import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withData = WrappedComponent => {
  const propTypes = {
    currentQuestion: PropTypes.object.isRequired,
    updateAnswer: PropTypes.func.isRequired
  };

  const Container = props => {
    const { currentQuestion, updateAnswer } = props;
    const { id, template, anwserDraft } = currentQuestion;

    const value = anwserDraft || template;

    const handleCodeChange = useCallback(
      v => {
        updateAnswer({ id, anwserDraft: v });
      },
      [id, updateAnswer]
    );

    return (
      <WrappedComponent
        id={id}
        value={value}
        onChange={handleCodeChange}
        {...props}
      />
    );
  };
  Container.propTypes = propTypes;

  const mapState = state => ({
    currentQuestion: state.question.currentQuestion
  });

  const mapDispatch = ({ question: { updateAnswer } }) => ({
    updateAnswer
  });

  const Wrapper = connect(
    mapState,
    mapDispatch
  )(Container);

  return Wrapper;
};

export default withData;
