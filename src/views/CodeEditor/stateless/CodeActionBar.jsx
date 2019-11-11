import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Sizer } from '@xinghunm/widgets';
import ButtonBase from 'src/components/ButtonBase';
import { NAMES, VIEW_SIZE } from 'src/utils/constants';

const Container = styled(Row)`
  width: 100%;
  height: ${VIEW_SIZE.CODE_ACTION_BAR}px;
  padding: 10px 20px;
  flex-shrink: 0;
  background: #fff;
`;

const ConsoleBtn = styled(ButtonBase)`
  padding: 6px 8px;
`;

const CaretUp = styled.i.attrs(() => ({
  className: 'fa fa-caret-up'
}))`
  margin-left: 5px;
`;

const propTypes = {
  executeCode: PropTypes.func.isRequired,
  toggleConsole: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  submitQuestion: PropTypes.func.isRequired
};

const CodeActionBar = ({
  executeCode,
  toggleConsole,
  currentQuestion,
  submitQuestion
}) => {
  const questionId = currentQuestion.id;
  const toggle = () => {
    toggleConsole(isShowConsole => !isShowConsole);
  };
  return (
    <Container>
      <ConsoleBtn onClick={toggle}>
        {NAMES.CONSOLE}
        <CaretUp />
      </ConsoleBtn>
      <Sizer />
      <ButtonBase onClick={executeCode}>{NAMES.EXECUTE}</ButtonBase>
      <Sizer.X size={25} />
      <ButtonBase background="#ddd" onClick={() => submitQuestion(questionId)}>
        {NAMES.SUBMIT}
      </ButtonBase>
    </Container>
  );
};

CodeActionBar.propTypes = propTypes;

export default React.memo(CodeActionBar);
