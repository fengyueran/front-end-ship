import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const PaginationContainer = props => {
    const EXPANDE_THRESHOLD_PAGE = 10;
    const ELLIPSIS_THRESHOLD_PAGE = 5;
    const { total, pageSize, current, onPageChange } = props;
    const totalPages = Math.ceil(total / pageSize) || 0;

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

    const calcPageItem = () => {
      let pageItems;
      if (totalPages < EXPANDE_THRESHOLD_PAGE) {
        pageItems = Array(totalPages).fill(0);
        pageItems = pageItems.map((v, index) => index + 1);
      } else {
        pageItems = [1];
        const isShowLeftEllipsis = currentPage >= ELLIPSIS_THRESHOLD_PAGE;
        if (isShowLeftEllipsis) {
          pageItems = [...pageItems, '...', currentPage - 1, currentPage];
        } else {
          pageItems = Array(ELLIPSIS_THRESHOLD_PAGE - 1).fill(0);
          pageItems = pageItems.map((v, index) => index + 1);
        }
        const isShowRightEllipsis =
          totalPages - currentPage >= ELLIPSIS_THRESHOLD_PAGE - 1;
        if (isShowRightEllipsis) {
          if (currentPage >= ELLIPSIS_THRESHOLD_PAGE) {
            pageItems.push(currentPage + 1);
          }
          pageItems.push('...');
          pageItems.push([totalPages]);
        } else {
          pageItems = Array(ELLIPSIS_THRESHOLD_PAGE - 1).fill(0);
          pageItems = pageItems.map((v, index) => totalPages - index);
          pageItems.reverse();
          pageItems = [1, '...', ...pageItems];
        }
      }
      return pageItems;
    };

    const isShowPagination = total > pageSize;
    const pageItems = calcPageItem();
    return (
      isShowPagination && (
        <WrappedComponent
          totalPages={totalPages}
          pageItems={pageItems}
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
