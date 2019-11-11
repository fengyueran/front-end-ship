import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withData = WrappedComponent => {
  const propTypes = {
    currentBlog: PropTypes.object.isRequired,
    getBlogHtml: PropTypes.func.isRequired
  };

  const Container = props => {
    const { currentBlog, getBlogHtml } = props;
    const { id, blog } = currentBlog;
    useEffect(() => {
      if (!blog) {
        getBlogHtml(id);
      }
    }, [blog, getBlogHtml, id]);

    return <WrappedComponent blogHtml={blog} />;
  };

  Container.propTypes = propTypes;

  const mapState = state => ({
    currentBlog: state.blog.currentBlog
  });

  const mapDispatch = ({ blog: { getBlogHtml } }) => ({
    getBlogHtml
  });

  const Wrapper = connect(mapState, mapDispatch)(Container);

  return Wrapper;
};

export default withData;
