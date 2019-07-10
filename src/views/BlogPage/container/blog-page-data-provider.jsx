import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import client from 'src/webapi';

const withData = WrappedComponent => {
  const propTypes = {
    initBlogs: PropTypes.func.isRequired,
    blogIds: PropTypes.func.isRequired
  };

  const Container = props => {
    const { initBlogs, ...res } = props;

    useEffect(() => {
      client.getBlogs().then(data => {
        initBlogs(data);
      });
    }, [initBlogs]);

    return <WrappedComponent {...res} />;
  };

  Container.propTypes = propTypes;

  const mapState = state => ({
    blogIds: state.blog.blogIds
  });

  const mapDispatch = ({ blog: { initBlogs } }) => ({
    initBlogs
  });

  const Wrapper = connect(
    mapState,
    mapDispatch
  )(Container);

  return Wrapper;
};

export default withData;
