import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import { ModelDialog } from 'src/components/Modal';
import { ROUTES } from 'src/utils/constants';
import NavBar from '../NavBar';
import BlogPage from '../BlogPage';
import QuestionPage from '../QuestionPage';
import ComponentPage from '../ComponentPage';
import WebNavigation from '../WebNavigation';

const Container = styled(VerticalBox)`
  width: 100%;
  @media (hover: hover) {
    height: 100%;
  }
`;

const Content = styled(VerticalBox)`
  width: 100%;
  flex-grow: 1;
  @media (hover: hover) {
    height: 100%;
  }
`;

const Sizer = styled.div`
  width: 100%;
  height: 60px;
  flex-shrink: 0;
`;

const propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

const PrimaryLayout = ({ history, location }) => (
  <Container>
    <NavBar history={history} location={location} />
    <Content>
      <Sizer />
      <Route exact path={ROUTES.ROOT} component={QuestionPage} />
      <Route path={ROUTES.BLOG} component={BlogPage} />
      <Route path={ROUTES.QUESTION} component={QuestionPage} />
      <Route path={ROUTES.COMPONENT} component={ComponentPage} />
      <Route path={ROUTES.RESOURCE} component={WebNavigation} />
    </Content>
    <ModelDialog />
  </Container>
);
PrimaryLayout.propTypes = propTypes;
export default PrimaryLayout;
