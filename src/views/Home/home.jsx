import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import { ROUTES } from 'src/utils/constants';
import NavBar from '../NavBar';
import QuestionTable from '../QuestionTable';
import WebNavigation from '../WebNavigation';
import AnswerPage from '../AnswerPage';

const Container = styled(VerticalBox)`
  width: 100%;
  height: 100%;
`;

const Content = styled(VerticalBox)`
  width: 100%;
  flex-grow: 1;
`;

const Home = () => (
  <Container>
    <NavBar />
    <Content>
      <Route exact path={ROUTES.ROOT} component={QuestionTable} />
      <Route path={ROUTES.QUESTION} component={QuestionTable} />
      <Route path={ROUTES.RESOURCE} component={WebNavigation} />
      <Route path={ROUTES.ANSWER} component={AnswerPage} />
    </Content>
  </Container>
);

export default Home;
