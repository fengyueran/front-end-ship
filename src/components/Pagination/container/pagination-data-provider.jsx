import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const PaginationContainer = props => {
    const { total, pageSize, current, onPageChange } = props;
    let totalPages = Math.ceil(total / pageSize) || 0;
    totalPages = totalPages < 5 ? totalPages : 5;

    const [currentPage, setCurrentPage] = useState(1);

    if (current && current !== currentPage) {
      setCurrentPage(current);
    }

    const handleJumpPage = e => {
      const valueStr = e.target.innerText;
      if (valueStr) {
        const page = +valueStr;
        setCurrentPage(page);
        if (onPageChange) {
          onPageChange(page - 1);
        }
      }
    };

    const jumpPrePage = () => {
      if (currentPage > 1) {
        const page = currentPage - 1;
        setCurrentPage(page);
        if (onPageChange) {
          onPageChange(page - 1);
        }
      }
    };

    const jumpNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        if (onPageChange) {
          onPageChange(currentPage);
        }
      }
    };

    const isShowPagination = total > pageSize;
    return (
      isShowPagination && (
        <WrappedComponent
          totalPages={totalPages}
          currentPage={currentPage}
          jumpPrePage={jumpPrePage}
          jumpNextPage={jumpNextPage}
          handleJumpPage={handleJumpPage}
        />
      )
    );
  };

  PaginationContainer.propTypes = {
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    current: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
  };

  PaginationContainer.defaultProps = {
    pageSize: 3
  };

  return PaginationContainer;
};

export default withData;
