import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Sizer } from '@xinghunm/widgets';
import ButtonBase from 'src/components/ButtonBase';
import { BUTTONS_NAME } from 'src/utils/constants';

const Container = styled(LineBox)`
  width: 100%;
  padding: 10px 20px;
  box-shadow: inset 0 1px #eee;
  flex-shrink: 0;
`;

const RandomBtn = styled(ButtonBase)`
  padding: 6px 8px;
`;

const RandomIcom = styled.i.attrs(() => ({
  className: 'fa fa-random'
}))`
  margin-right: 5px;
  margin-top: 1px;
`;

const propTypes = {
  questionsTotal: PropTypes.number.isRequired,
  currentQustionNum: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  preQuestion: PropTypes.func.isRequired,
  randomQuestion: PropTypes.func.isRequired
};

const QuestionPickBar = ({
  questionsTotal,
  currentQustionNum,
  nextQuestion,
  preQuestion,
  randomQuestion
}) => {
  const isPreBtnDisable = currentQustionNum === 1;
  const isNextBtnDisable = currentQustionNum === questionsTotal;
  return (
    <Container>
      <Sizer />
      <RandomBtn onClick={randomQuestion}>
        <RandomIcom />
        {BUTTONS_NAME.RANDOM_QUESTION}
      </RandomBtn>
      <Sizer.X size={30} />
      <ButtonBase onClick={preQuestion} isDisable={isPreBtnDisable}>
        {BUTTONS_NAME.PRE_QUESTION}
      </ButtonBase>
      <Sizer.X size={25} />
      <ButtonBase onClick={nextQuestion} isDisable={isNextBtnDisable}>
        {BUTTONS_NAME.NEXT_QUESTION}
      </ButtonBase>
    </Container>
  );
};
QuestionPickBar.propTypes = propTypes;

export default QuestionPickBar;
