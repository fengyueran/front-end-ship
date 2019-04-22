import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PaginationItem, PrevIcon, NextIcon } from './Widget';

const BasePagination = styled.ul`
  border-radius: 4px;
  display: inline-block;
  padding: 10px 0;
  margin: 0;
  li {
    display: inline-block;
  }
`;

const PaginationPropTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  jumpPrePage: PropTypes.func.isRequired,
  jumpNextPage: PropTypes.func.isRequired,
  handleJumpPage: PropTypes.func.isRequired
};

const Pagination = props => {
  const {
    totalPages,
    currentPage,
    jumpPrePage,
    jumpNextPage,
    handleJumpPage
  } = props;
  const preDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  const pageItems = Array(totalPages).fill(0);
  return (
    <BasePagination>
      <PrevIcon disabled={preDisabled} onClick={jumpPrePage} />
      {pageItems.map((v, index) => {
        const pageNumber = 1 + index;
        const isActive = pageNumber === currentPage;
        return (
          <PaginationItem
            key={pageNumber}
            isActive={isActive}
            onClick={handleJumpPage}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <NextIcon disabled={nextDisabled} onClick={jumpNextPage} />
    </BasePagination>
  );
};

Pagination.propTypes = PaginationPropTypes;

export default Pagination;
