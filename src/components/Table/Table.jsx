import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pagination } from '@xinghunm/widgets';

const Container = styled.div``;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  overflow: hidden;
  background: #ffffff;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid #ddd6;
  font-weight: bold;
`;

const TableRow = styled.tr`
  height: 48px;
  transition: background 0.1s ease;
  &:nth-of-type(odd) {
    background: #fafafa;
  }
  :hover {
    background: #6b9bda;
  }
`;

const TableHeadCell = styled.th`
  text-align: left;
  padding: 0 8px;
  border-bottom: 1px solid #e8e8e8;
`;

const TableCell = styled.td`
  padding: 0 8px;
`;

const TableBody = styled.tbody``;

const PaginationContainer = styled.div`
  display: inline-block;
  background: white;
  width: 100%;
  border-top: 1px solid rgba(221, 221, 221, 0.5);
  text-align: right;
`;

const TablePropTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  onPageChange: PropTypes.func,
  pagination: PropTypes.object
};

const TableDefaultPropTypes = {
  pagination: {}
};

const DEFAULT_PAGE_SIZE = 10;

const Table = ({ columns, dataSource, onPageChange, pagination }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { current } = pagination;

  if (current && current !== currentPage) {
    setCurrentPage(current);
  }

  const pageSize = pagination.pageSize || DEFAULT_PAGE_SIZE;
  const currentPageData = dataSource.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handlePageChange = page => {
    if (!current) {
      setCurrentPage(page);
    }
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <Container>
      <StyledTable>
        <TableHead>
          <TableRow>
            {columns.map(({ name }) => (
              <TableHeadCell key={name}>{name}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPageData.map((rowData, index) => (
            <TableRow key={index}>
              {columns.map(({ dataIndex, key }) => (
                <TableCell key={rowData[key] || rowData[dataIndex]}>
                  {rowData[dataIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <PaginationContainer>
        <Pagination
          total={dataSource && dataSource.length}
          current={current}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    </Container>
  );
};

Table.propTypes = TablePropTypes;
Table.defaultProps = TableDefaultPropTypes;

export default Table;
