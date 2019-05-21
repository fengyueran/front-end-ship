import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Button, Sizer, utils } from '@xinghunm/widgets';
import { BUTTONS_NAME } from 'src/utils/constants';

const Container = styled(LineBox)`
  width: 100%;
  padding: 10px 20px;
  box-shadow: inset 0 1px #eee;
  flex-shrink: 0;
`;

const StyledBtn = styled(Button).attrs(({ isDisable }) => ({
  hasRipple: !isDisable
}))`
  font-size: ${props => `${props.fontSize || 13}px`};
  color: ${props => (props.isDisable ? '#afaeae' : '#37464e')};
  border: solid 1px;
  border-color: ${props => (props.isDisable ? '#E8E9E9' : '#c9d6da')};
  outline: none;
  padding: 6px 18px;
  border-radius: 3px;
  margin: 0;
  min-height: 34px;
  background: ${props => props.background || 'none'};

  :hover {
    background: ${props =>
      props.isDisable ? 'none' : utils.fade('#337ab7', 0.2)};
    cursor: ${props => (props.isDisable ? 'not-allowed' : 'pointer')};
  }
  box-shadow: none;
`;

const propTypes = {
  questionsTotal: PropTypes.number.isRequired,
  currentQustionNum: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  preQuestion: PropTypes.func.isRequired
};

const QuestionPickBar = ({
  questionsTotal,
  currentQustionNum,
  nextQuestion,
  preQuestion
}) => {
  const isPreBtnDisable = currentQustionNum === 1;
  const isNextBtnDisable = currentQustionNum === questionsTotal;
  return (
    <Container>
      <Sizer />
      <StyledBtn onClick={preQuestion} isDisable={isPreBtnDisable}>
        {BUTTONS_NAME.PRE_QUESTION}
      </StyledBtn>
      <Sizer.X size={25} />
      <StyledBtn onClick={nextQuestion} isDisable={isNextBtnDisable}>
        {BUTTONS_NAME.NEXT_QUESTION}
      </StyledBtn>
    </Container>
  );
};
QuestionPickBar.propTypes = propTypes;

export default QuestionPickBar;
