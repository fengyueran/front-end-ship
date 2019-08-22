import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { LineBox, VerticalBox } from '@xinghunm/widgets';
import { QUESTION_TYPES } from 'src/utils/constants';
import QuestionInfoBar from './QuestionInfoBar';
import CodeEditor from '../../CodeEditor';
import AnswerArea from '../../AnswerArea';
import ResizeBar from './ResizeBar';

const Container = styled(VerticalBox)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const fullScreenCss = css`
  position: fixed;
  top: 0;
  z-index: 2000;
  left: 0;
`;

const Content = styled(LineBox)`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  @media (hover: hover) {
    min-width: 890px;
  }
  ${props => props.isFullScreen && fullScreenCss}
`;

const propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  answerAreaEl: PropTypes.object.isRequired,
  codeEditorEl: PropTypes.object.isRequired,
  resizeBarEl: PropTypes.object.isRequired,
  flexGrow: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func.isRequired
};

const AnswerPage = props => {
  const {
    isFullScreen,
    currentQuestion,
    answerAreaEl,
    codeEditorEl,
    resizeBarEl,
    flexGrow,
    onMouseDown
  } = props;
  const { type, template } = currentQuestion;
  const isShowTwoPanel = type === QUESTION_TYPES.CODE;

  return (
    <Container>
      <QuestionInfoBar currentQuestion={currentQuestion} />
      <Content isFullScreen={isFullScreen}>
        <AnswerArea
          currentQuestion={currentQuestion}
          getRef={answerAreaEl}
          flexGrow={flexGrow}
        />
        {isShowTwoPanel && (
          <>
            <ResizeBar getRef={resizeBarEl} onMouseDown={onMouseDown} />
            <CodeEditor
              getRef={codeEditorEl}
              template={template}
              currentQuestion={currentQuestion}
            />
          </>
        )}
      </Content>
    </Container>
  );
};
AnswerPage.propTypes = propTypes;

export default AnswerPage;
