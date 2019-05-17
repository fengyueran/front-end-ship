import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, VerticalBox } from '@xinghunm/widgets';
import QuestionInfoBar from './QuestionInfoBar';
import CodeEditor from '../../CodeEditor';
import AnswerArea from '../../AnswerArea';

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
  currentQuestion: PropTypes.object.isRequired
};

const AnswerPage = ({ currentQuestion }) => (
  <Container>
    <QuestionInfoBar currentQuestion={currentQuestion} />
    <Content>
      <AnswerArea currentQuestion={currentQuestion} />
      <CodeEditor />
    </Content>
  </Container>
);
AnswerPage.propTypes = propTypes;

export default AnswerPage;
