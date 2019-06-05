import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import { ROUTES } from 'src/utils/constants';
import NavBar from '../NavBar';
import QuestionPage from '../QuestionPage';
import WebNavigation from '../WebNavigation';

const Container = styled(VerticalBox)`
  width: 100%;
  height: 100%;
`;

const Content = styled(VerticalBox)`
  width: 100%;
  flex-grow: 1;
`;

const propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const Home = ({ history, location }) => (
  <Container>
    <NavBar history={history} location={location} />
    <Content>
      <Route exact path={ROUTES.ROOT} component={QuestionPage} />
      <Route path={ROUTES.QUESTION} component={QuestionPage} />
      <Route path={ROUTES.RESOURCE} component={WebNavigation} />
    </Content>
  </Container>
);
Home.propTypes = propTypes;
export default Home;
