import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'src/components/Container';
import SearchBar from 'src/components/SearchBar';
import withData from '../container/brief-card-data-provider';

import BriefCard from './BriefCard';

const BriefCardWithData = withData(BriefCard);

const BlogsWrapper = styled(Container)`
  padding: 40px 0;
  height: auto;
`;

const BlogListContainer = styled.div``;

const propTypes = {
  blogIds: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  handleBlogClick: PropTypes.func.isRequired
};

const BlogList = ({ blogIds, handleBlogClick, onChange }) => (
  <BlogsWrapper>
    <SearchBar
      style={{ height: 45 }}
      title="我的博客"
      placeholder="搜索标题"
      onChange={onChange}
    />
    <BlogListContainer onClick={handleBlogClick}>
      {blogIds.map(id => (
        <BriefCardWithData key={id} id={id} />
      ))}
    </BlogListContainer>
  </BlogsWrapper>
);

BlogList.propTypes = propTypes;

export default BlogList;
