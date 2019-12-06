import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import client from 'src/webapi';
import { ROUTES } from 'src/utils/constants';
import { getArribute } from 'src/utils/get-arribute';

const withData = WrappedComponent => {
  const propTypes = {
    blogIds: PropTypes.arrayOf(Object).isRequired,
    history: PropTypes.object.isRequired,
    initBlogs: PropTypes.func.isRequired,
    searchBlog: PropTypes.func.isRequired,
    setCurrentBlog: PropTypes.func.isRequired
  };

  const Container = props => {
    const {
      blogIds,
      initBlogs,
      setCurrentBlog,
      searchBlog,
      history,
      ...res
    } = props;

    const [searched, setSearched] = useState([]);

    const handleBlogClick = e => {
      const blogId = getArribute(e, 'data-id');
      if (blogId) {
        setCurrentBlog(blogId);
        history.push(ROUTES.BLOG_HTML);
      }
    };

    const handSearch = useCallback(
      async e => {
        const { value } = e.target;
        const searchResult = await searchBlog(value);
        setSearched(searchResult);
      },
      [searchBlog]
    );

    useEffect(() => {
      client.getBlogs().then(data => {
        initBlogs(data);
      });
    }, [initBlogs]);

    return (
      <WrappedComponent
        {...res}
        blogIds={searched.length > 0 ? searched : blogIds}
        handleBlogClick={handleBlogClick}
        onChange={handSearch}
      />
    );
  };

  Container.propTypes = propTypes;

  const mapState = state => ({
    blogIds: state.blog.blogIds
  });

  const mapDispatch = ({
    blog: { initBlogs, setCurrentBlog, searchBlog }
  }) => ({
    initBlogs,
    searchBlog,
    setCurrentBlog
  });

  const Wrapper = connect(mapState, mapDispatch)(Container);

  return Wrapper;
};

export default withData;
