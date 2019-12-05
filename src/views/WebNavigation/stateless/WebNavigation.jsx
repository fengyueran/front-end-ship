import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from '@xinghunm/widgets';
import Masonry from 'src/components/Masonry';
import SearchBar from 'src/components/SearchBar';
import { VIEW_SIZE } from 'src/utils/constants';
import Card from './Card';
import withData from '../container/card-data-provider';

const CardWithData = withData(Card);

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const SearchBarWrapper = styled.div`
  margin: 20px 20px 0 20px;
`;

const MasonryWrapper = styled.div`
  height: calc(100% - ${VIEW_SIZE.SEARCH_BAR_HEIGHT}px);
  background: #c3daec;
  width: calc(100% - 40px);
  margin: 0 20px;
`;

const propTypes = {
  websiteIds: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

const WebNavigation = ({ websiteIds, onClick, isLoading, handleSearch }) => (
  <Container onClick={onClick}>
    {isLoading ? (
      <Spin />
    ) : (
      <>
        <SearchBarWrapper>
          <SearchBar
            title="资源集合"
            placeholder="搜索网站"
            onChange={handleSearch}
          />
        </SearchBarWrapper>
        <MasonryWrapper>
          <Masonry>
            {websiteIds.map(id => (
              <CardWithData key={id} id={id} />
            ))}
          </Masonry>
        </MasonryWrapper>
      </>
    )}
  </Container>
);

WebNavigation.propTypes = propTypes;

export default WebNavigation;
