import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import client from 'src/webapi';

const mapState = state => ({
  websiteIds: state.website.websiteIds
});

const mapDispatch = ({ website: { initWebsites } }) => ({
  initWebsites
});

const withData = WrappedComponent => {
  const propTypes = {
    websiteIds: PropTypes.array.isRequired,
    initWebsites: PropTypes.func.isRequired
  };

  const Wrapper = ({ websiteIds, initWebsites }) => {
    useEffect(() => {
      client.getWebsites().then(data => {
        initWebsites(data);
      });
    }, [initWebsites]);

    const handleCardClick = e => {
      let target = e.target;
      let link;
      while (target) {
        link = target.getAttribute('data-link');
        target = link ? null : target.parentElement;
      }
      if (link) {
        window.open(link);
      }
    };

    return (
      <WrappedComponent onClick={handleCardClick} websiteIds={websiteIds} />
    );
  };

  Wrapper.propTypes = propTypes;
  const Container = connect(
    mapState,
    mapDispatch
  )(Wrapper);

  return Container;
};

export default withData;
