import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from '@xinghunm/widgets';
import Masonry from 'src/components/Masonry';
import Card from './Card';
import withData from '../container/card-data-provider';

const CardWithData = withData(Card);

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const propTypes = {
  websiteIds: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

const WebNavigation = ({ websiteIds, onClick }) => (
  <Container onClick={onClick}>
    {websiteIds.length > 0 ? (
      <Masonry>
        {websiteIds.map(id => (
          <CardWithData key={id} id={id} />
        ))}
      </Masonry>
    ) : (
      <Spin />
    )}
  </Container>
);

WebNavigation.propTypes = propTypes;

export default WebNavigation;
