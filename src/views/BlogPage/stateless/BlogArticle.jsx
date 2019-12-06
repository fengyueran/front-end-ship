import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';

const BlogsWrapper = styled(Container)`
  height: auto;
  display: block;
  background: #fff;
  img {
    max-width: 100%;
  }
  padding: 10px 20px 20px !important;
  @media (hover: none) {
    h3 {
      font-size: 18px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333;
  }
  color: #333;
  pre {
    text-align: left;
  }
  pre code {
    text-align: left;
  }
`;

const propTypes = {
  blogHtml: PropTypes.instanceOf(Object).isRequired
};

const BlogArticle = ({ blogHtml }) => (
  <BlogsWrapper dangerouslySetInnerHTML={blogHtml} />
);

BlogArticle.propTypes = propTypes;

export default BlogArticle;
