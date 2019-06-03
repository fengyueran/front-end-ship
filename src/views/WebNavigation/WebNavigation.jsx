import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'src/components/Masonry';
import Card from './Card';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const propTypes = {
  sites: PropTypes.array.isRequired
};

const WebNavigation = ({ sites }) => (
  <Container>
    <Masonry>
      {sites.map(siteInfo => (
        <Card key={siteInfo.title} siteInfo={siteInfo} />
      ))}
    </Masonry>
  </Container>
);

WebNavigation.propTypes = propTypes;

export default WebNavigation;
