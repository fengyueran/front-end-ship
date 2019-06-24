import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from '@xinghunm/widgets';
import Masonry from 'src/components/Masonry';
import SearchBox from 'src/components/SearchBox';
import { VIEW_SIZE } from 'src/utils/constants';
import Card from './Card';
import withData from '../container/card-data-provider';

const CardWithData = withData(Card);

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const MasonryWrapper = styled.div`
  width: 100%;
  height: calc(100% - ${VIEW_SIZE.SEARCH_BAR_HEIGHT}px);
`;

const SearchBar = styled.div`
  width: 100%;
  height: ${VIEW_SIZE.SEARCH_BAR_HEIGHT}px;
  background: #fff;
`;

const SearchBoxWrapper = styled.div`
  width: 200px;
  margin-left: 50px;
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
        <SearchBar>
          <SearchBoxWrapper>
            <SearchBox placeholder="搜索网站" onChange={handleSearch} />
          </SearchBoxWrapper>
        </SearchBar>
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
