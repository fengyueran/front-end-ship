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
`;

const RandomBtn = styled(ButtonBase)`
  padding: 6px 8px;
`;

const RandomIcon = styled.i.attrs(() => ({
  className: 'fa fa-random'
}))`
  margin-right: 5px;
  margin-top: 1px;
`;

const QuestionNum = styled.span`
  display: inline-block;
  text-align: center;
  width: 80px;
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
      <RandomBtn onClick={randomQuestion}>
        <RandomIcon />
        {NAMES.RANDOM_QUESTION}
      </RandomBtn>
      <Sizer.X size={30} />
      <ButtonBase onClick={preQuestion} isDisable={isPreBtnDisable}>
        {NAMES.PRE_QUESTION}
      </ButtonBase>
      <QuestionNum>{`${currentQustionNum} / ${questionsTotal}`}</QuestionNum>
      <ButtonBase onClick={nextQuestion} isDisable={isNextBtnDisable}>
        {NAMES.NEXT_QUESTION}
      </ButtonBase>
    </Container>
  );
};
QuestionPickBar.propTypes = propTypes;

export default QuestionPickBar;
