import React from 'react';
import styled from 'styled-components';
import { LineBox, VerticalBox } from '@xinghunm/widgets';
import withData from '../container/info-bar-data-provider';
import QuestionInfoBar from './QuestionInfoBar';
import CodeEditor from '../../CodeEditor';
import Article from '../../Article';

const InfoBarContainer = withData(QuestionInfoBar);

const Container = styled(VerticalBox)`
  height: 100%;
  padding: 20px;
  align-items: flex-start;
`;

const Content = styled(LineBox)`
  height: 100%;
  & > div {
    width: 50%;
  }
`;

const AnswerPage = () => (
  <Container>
    <InfoBarContainer />
    <Content>
      <Article />
      <CodeEditor />
    </Content>
  </Container>
);

export default AnswerPage;
