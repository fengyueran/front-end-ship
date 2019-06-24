import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash-es';
import { connect } from 'react-redux';
import client from 'src/webapi';

const mapState = state => ({
  websiteIds: state.website.websiteIds,
  websiteById: state.website.websiteById
});

const mapDispatch = ({ website: { initWebsites } }) => ({
  initWebsites
});

const withData = WrappedComponent => {
  const propTypes = {
    websiteIds: PropTypes.array.isRequired,
    websiteById: PropTypes.object.isRequired,
    initWebsites: PropTypes.func.isRequired
  };

  const Wrapper = ({ websiteIds, websiteById, initWebsites }) => {
    const [websitesToShow, setWebsitesToShow] = useState(websiteIds);
    const [isLoading, setIsLoading] = useState(true);

    const handleSearch = useCallback(
      e => {
        const filteredData = filter(websiteIds, id => {
          const { title } = websiteById[id];
          const lowerTitle = title.toLocaleLowerCase();
          const lowerTarget = e.target.value.toLocaleLowerCase();
          return lowerTitle.includes(lowerTarget);
        });
        setWebsitesToShow(filteredData);
      },
      [websiteById, websiteIds]
    );

    useEffect(() => {
      client.getWebsites().then(data => {
        initWebsites(data);
        setIsLoading(false);
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
      <WrappedComponent
        isLoading={isLoading}
        onClick={handleCardClick}
        websiteIds={websitesToShow}
        handleSearch={handleSearch}
      />
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
