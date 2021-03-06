import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';
import blogListDataProvider from '../container/blog-list-data-provider';
import blogArticleDataProvider from '../container/blog-article-data-provider';
import BlogList from './BlogList';
import BlogArticle from './BlogArticle';

const BlogListWithData = blogListDataProvider(BlogList);
const BlogArticleWithData = blogArticleDataProvider(BlogArticle);

const BlogsContainer = styled.div`
  overflow: auto;
  height: 100%;
  background: #ddd;
  line-height: 1.75;
  font-size: 15px;
`;

const BlogPage = () => (
  <BlogsContainer>
    <Route exact path={ROUTES.BLOG} component={BlogListWithData} />
    <Route path={ROUTES.BLOG_HTML} component={BlogArticleWithData} />
  </BlogsContainer>
);

export default BlogPage;
