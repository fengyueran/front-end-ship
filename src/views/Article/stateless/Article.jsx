import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuestionArea = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
  border: 1px solid;
`;

const propTypes = {
  html: PropTypes.object
};

const Article = ({ html }) => <QuestionArea dangerouslySetInnerHTML={html} />;

Article.propTypes = propTypes;

export default Article;
