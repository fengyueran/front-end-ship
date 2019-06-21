import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Sizer } from '@xinghunm/widgets';
import ButtonBase from 'src/components/ButtonBase';
import { NAMES, VIEW_SIZE } from 'src/utils/constants';

const Container = styled(LineBox)`
  width: 100%;
  height: ${VIEW_SIZE.QUESTION_PICKER_BAR_HEIGHT}px;
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

const NextIcon = styled.i.attrs(() => ({
  className: 'fa fa-angle-right'
}))`
  margin-left: 7px;
  margin-top: 1px;
  color: #5e7e8e;
  color: ${props => (props.isDisable ? '#afaeae' : ' #5e7e8e')};
`;

const PreIcon = styled.i.attrs(() => ({
  className: 'fa fa-angle-left'
}))`
  margin-right: 7px;
  margin-top: 1px;
  color: ${props => (props.isDisable ? '#afaeae' : ' #5e7e8e')};
`;

const QuestionNum = styled.span`
  display: inline-block;
  text-align: center;
  width: 80px;
`;

const BtnName = styled.span`
  @media screen and (max-width: 512px) {
    display: none;
  }
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
        <BtnName>{NAMES.RANDOM_QUESTION}</BtnName>
      </RandomBtn>
      <Sizer.X size={30} />
      <ButtonBase onClick={preQuestion} isDisable={isPreBtnDisable}>
        <PreIcon isDisable={isPreBtnDisable} />
        <BtnName>{NAMES.PRE_QUESTION}</BtnName>
      </ButtonBase>
      <QuestionNum>{`${currentQustionNum} / ${questionsTotal}`}</QuestionNum>
      <ButtonBase onClick={nextQuestion} isDisable={isNextBtnDisable}>
        <BtnName>{NAMES.NEXT_QUESTION}</BtnName>
        <NextIcon isDisable={isNextBtnDisable} />
      </ButtonBase>
    </Container>
  );
};
QuestionPickBar.propTypes = propTypes;

export default QuestionPickBar;
