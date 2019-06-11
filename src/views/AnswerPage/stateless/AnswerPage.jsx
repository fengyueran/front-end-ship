import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, VerticalBox } from '@xinghunm/widgets';
import { QUESTION_TYPES } from 'src/utils/constants';
import QuestionInfoBar from './QuestionInfoBar';
import CodeEditor from '../../CodeEditor';
import AnswerArea from '../../AnswerArea';
import ResizeBar from './ResizeBar';

const Container = styled(VerticalBox)`
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: flex-start;
`;

const Content = styled(LineBox)`
  height: 100%;
  width: 100%;
`;

const propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  answerAreaEl: PropTypes.object.isRequired,
  codeEditorEl: PropTypes.object.isRequired,
  resizeBarEl: PropTypes.object.isRequired,
  flexGrow: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func.isRequired
};

const AnswerPage = props => {
  const {
    currentQuestion,
    answerAreaEl,
    codeEditorEl,
    resizeBarEl,
    flexGrow,
    onMouseDown
  } = props;
  const { type } = currentQuestion;
  const isShowTwoPanel = type === QUESTION_TYPES.CODE;

  return (
    <Container>
      <QuestionInfoBar currentQuestion={currentQuestion} />
      <Content>
        <AnswerArea
          currentQuestion={currentQuestion}
          getRef={answerAreaEl}
          flexGrow={flexGrow}
        />
        {isShowTwoPanel && (
          <>
            <ResizeBar getRef={resizeBarEl} onMouseDown={onMouseDown} />
            <CodeEditor getRef={codeEditorEl} />
          </>
        )}
      </Content>
    </Container>
  );
};
AnswerPage.propTypes = propTypes;

export default AnswerPage;
