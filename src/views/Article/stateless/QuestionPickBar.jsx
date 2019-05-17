import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  padding: 15px;
  background: gray;
  flex-shrink: 0;
}`;

const propTypes = {
  currentQuestion: PropTypes.object.isRequired
};

const QuestionPickBar = () => {
  return <Container>{132}</Container>;
};

export default QuestionPickBar;
