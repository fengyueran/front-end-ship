import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';
import BriefCard from './BriefCard';

const BlogsContainer = styled.div`
  overflow: auto;
  height: 100%;
  background: #ddd;
`;

const BlogsWrapper = styled(Container)`
  padding: 40px 0;
  height: auto;
`;

const propTypes = {
  blogIds: PropTypes.array.isRequired
};

const BlogPage = ({ blogIds }) => (
  <BlogsContainer>
    <BlogsWrapper>
      {[1, 2, 3, 1, 2, 3].map(() => (
        <BriefCard />
      ))}
    </BlogsWrapper>
  </BlogsContainer>
);

BlogPage.propTypes = propTypes;

export default BlogPage;
