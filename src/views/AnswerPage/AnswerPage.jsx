import React from 'react';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';
import CodeEditor from '../CodeEditor';
import Article from '../Article';

const Container = styled(LineBox)`
  height: 100%;
  padding: 20px;
  & > div {
    width: 50%;
  }
`;

const AnswerPage = () => (
  <Container>
    <Article />
    <CodeEditor />
  </Container>
);

export default AnswerPage;
