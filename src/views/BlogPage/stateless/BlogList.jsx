import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';
import withData from '../container/brief-card-data-provider';
import BriefCard from './BriefCard';

const BriefCardWithData = withData(BriefCard);

const BlogsWrapper = styled(Container)`
  padding: 40px 0;
  height: auto;
`;

const propTypes = {
  blogIds: PropTypes.array.isRequired,
  handleBlogClick: PropTypes.func.isRequired
};

const BlogList = ({ blogIds, handleBlogClick }) => (
  <BlogsWrapper onClick={handleBlogClick}>
    {blogIds.map(id => (
      <BriefCardWithData key={id} id={id} />
    ))}
  </BlogsWrapper>
);

BlogList.propTypes = propTypes;

export default BlogList;
