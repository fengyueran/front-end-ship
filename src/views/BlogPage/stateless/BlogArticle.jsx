import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';

const BlogsWrapper = styled(Container)`
  padding: 10px 20px 20px;
  height: auto;
  display: block;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
`;

const propTypes = {
  blogHtml: PropTypes.string.isRequired
};

const BlogArticle = ({ blogHtml }) => (
  <BlogsWrapper dangerouslySetInnerHTML={blogHtml} />
);

BlogArticle.propTypes = propTypes;

export default BlogArticle;
