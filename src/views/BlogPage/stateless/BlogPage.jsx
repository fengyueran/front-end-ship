import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';
import withData from '../container/brief-card-data-provider';
import BriefCard from './BriefCard';

const BriefCardWithData = withData(BriefCard);

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
      {blogIds.map(id => (
        <BriefCardWithData id={id} />
      ))}
    </BlogsWrapper>
  </BlogsContainer>
);

BlogPage.propTypes = propTypes;

export default BlogPage;
