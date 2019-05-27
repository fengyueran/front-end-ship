import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pagination } from '@xinghunm/widgets';

const Container = styled.div``;

const TableView = styled.div`
  position: relative;
  padding-top: 48px;
  ::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    height: 48px;
    background: #fff;
  }
`;

const TableViewHolder = styled.div`
  overflow-y: auto;
  max-height: 500px;
`;

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
    background: #cad2dc;
  }
`;

const TableHeadCell = styled.th`
  padding: 0 8px;
  height: 0;
  line-height: 0;
  ::before {
    top: 0;
    height: 48px;
    position: absolute;
    content: attr(data-name);
    line-height: 48px;
  }
`;

const TableCell = styled.td`
  padding: 0 8px;
  width: ${props => props.width || 'auto'};
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
      <TableView>
        <TableViewHolder>
          <StyledTable>
            <TableHead>
              <tr>
                {columns.map(({ name }) => (
                  <TableHeadCell data-name={name} key={name} />
                ))}
              </tr>
            </TableHead>
            <TableBody>
              {currentPageData.map((rowData, index) => (
                <TableRow key={index}>
                  {columns.map(({ dataIndex, width, render }, cellIndex) => (
                    <TableCell key={rowData.key || cellIndex} width={width}>
                      {render
                        ? render(rowData[dataIndex], rowData)
                        : rowData[dataIndex]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableViewHolder>
      </TableView>
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
