import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import client from 'src/webapi';
import { ROUTES } from 'src/utils/constants';
import { getArribute } from 'src/utils/get-arribute';

const withData = WrappedComponent => {
  const propTypes = {
    history: PropTypes.object.isRequired,
    initBlogs: PropTypes.func.isRequired,
    setCurrentBlog: PropTypes.func.isRequired
  };

  const Container = props => {
    const { initBlogs, setCurrentBlog, history, ...res } = props;

    const handleBlogClick = e => {
      const blogId = getArribute(e, 'data-id');
      setCurrentBlog(blogId);
      history.push(ROUTES.BLOG_HTML);
    };

    useEffect(() => {
      client.getBlogs().then(data => {
        initBlogs(data);
      });
    }, [initBlogs]);

    return <WrappedComponent {...res} handleBlogClick={handleBlogClick} />;
  };

  Container.propTypes = propTypes;

  const mapState = state => ({
    blogIds: state.blog.blogIds
  });

  const mapDispatch = ({ blog: { initBlogs, setCurrentBlog } }) => ({
    initBlogs,
    setCurrentBlog
  });

  const Wrapper = connect(mapState, mapDispatch)(Container);

  return Wrapper;
};

export default withData;
