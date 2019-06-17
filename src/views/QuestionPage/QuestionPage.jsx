import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from 'src/utils/constants';
import QuestionTable from '../QuestionTable';
import AnswerPage from '../AnswerPage';

const Container = styled.div`
  height: 100%;
  padding: 20px;
  @media (hover: none) {
    padding: 0;
  }
`;

const QuestionPage = () => (
  <Container>
    <Route exact path={ROUTES.ROOT} component={QuestionTable} />
    <Route exact path={ROUTES.QUESTION} component={QuestionTable} />
    <Route path={ROUTES.ANSWER} component={AnswerPage} />
  </Container>
);

export default QuestionPage;
