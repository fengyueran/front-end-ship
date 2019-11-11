/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapState = state => ({
  isFullScreen: state.question.isFullScreen,
  currentQuestion: state.question.currentQuestion
});

const mapDispatch = ({ question: { submitQuestion } }) => ({
  submitQuestion
});

const withData = WrappedComponent => {
  const propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    currentQuestion: PropTypes.object.isRequired
  };
  const Wrapper = ({ isFullScreen, currentQuestion }) => {
    const [flexGrow, setFlexGrow] = useState(1);
    const answerAreaEl = useRef(null);
    const codeEditorEl = useRef(null);
    const resizeBarEl = useRef(null);
    let startPointX;
    let isMouseDown;
    const onResizeBarDrag = offsetX => {
      const answerAreaWidth = answerAreaEl.current.clientWidth;
      const codeEditorWidth = codeEditorEl.current.clientWidth;
      if (codeEditorWidth <= 200) {
        startPointX = resizeBarEl.current.offsetLeft;
      }
      if (codeEditorWidth - offsetX > 0) {
        const scale = (answerAreaWidth + offsetX) / (codeEditorWidth - offsetX);
        setFlexGrow(scale);
      }
    };
    const onMouseMove = e => {
      if (isMouseDown) {
        const pointX = e.clientX;
        const offsetX = pointX - startPointX;
        startPointX = pointX;
        onResizeBarDrag(offsetX);
      }
    };

    const onMouseUp = () => {
      isMouseDown = false;
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = useCallback(e => {
      e.preventDefault();
      isMouseDown = true;
      startPointX = e.clientX;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }, []);

    return (
      <WrappedComponent
        isFullScreen={isFullScreen}
        flexGrow={flexGrow}
        answerAreaEl={answerAreaEl}
        codeEditorEl={codeEditorEl}
        resizeBarEl={resizeBarEl}
        onMouseDown={onMouseDown}
        currentQuestion={currentQuestion}
      />
    );
  };
  Wrapper.propTypes = propTypes;
  const Container = connect(mapState, mapDispatch)(Wrapper);
  return Container;
};

export default withData;
