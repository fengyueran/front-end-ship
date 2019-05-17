import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import TabBar from './TabBar';
import QuestionPickBar from './QuestionPickBar';

const Container = styled(VerticalBox)`
  height: 100%;
  overflow: auto;
  background: #fff;
`;

const ArticelArea = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
`;

const propTypes = {
  html: PropTypes.object
};

const Article = ({ html }) => (
  <Container>
    <TabBar />
    <ArticelArea dangerouslySetInnerHTML={html} />
    <QuestionPickBar />
  </Container>
);

Article.propTypes = propTypes;

export default Article;
