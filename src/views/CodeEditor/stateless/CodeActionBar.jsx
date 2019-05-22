import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Sizer } from '@xinghunm/widgets';
import ButtonBase from 'src/components/ButtonBase';
import { NAMES } from 'src/utils/constants';

const Container = styled(LineBox)`
  width: 100%;
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
  toggleConsole: PropTypes.func.isRequired
};

const CodeActionBar = ({ executeCode, toggleConsole }) => {
  return (
    <Container>
      <ConsoleBtn onClick={toggleConsole}>
        {NAMES.CONSOLE}
        <CaretUp />
      </ConsoleBtn>
      <Sizer />
      <ButtonBase onClick={executeCode}>{NAMES.EXECUTE}</ButtonBase>
      <Sizer.X size={25} />
      <ButtonBase background="#ddd" onClick={executeCode}>
        {NAMES.SUBMIT}
      </ButtonBase>
    </Container>
  );
};

CodeActionBar.propTypes = propTypes;

export default CodeActionBar;
