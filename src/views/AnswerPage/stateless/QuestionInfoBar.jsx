import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  height: 56px;
  padding: 15px;
  background: #fff;
  z-index: 1;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  ::before {
    position: absolute;
    width: 2px;
    height: 26px;
    left: 0px;
    bottom: 0;
    top: 0;
    content: '';
    background-color: #457fca;
    margin: auto 0;
  }
`;

const Title = styled.h4`
  color: rgba(0, 0, 0, 0.85);
`;

const propTypes = {
  currentQuestion: PropTypes.object.isRequired
};

const QuestionInfoBar = ({ currentQuestion }) => {
  const { number, title } = currentQuestion;
  return (
    <Container>
      <Title>{`${number}. ${title}`}</Title>
    </Container>
  );
};

QuestionInfoBar.propTypes = propTypes;

export default QuestionInfoBar;
