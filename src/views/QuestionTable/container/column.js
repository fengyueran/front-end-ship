import React from 'react';
import TitleCell from '../stateless/TitleCell';
import withData from './title-cell-data-provider';

const TitleCellContainer = withData(TitleCell);

const columnsData = [
  {
    name: '',
    width: '10px'
  },
  {
    name: '#',
    dataIndex: 'number',
    width: '10%'
  },
  {
    name: '题名',
    dataIndex: 'title',
    render: (title, rowData) => <TitleCellContainer rowData={rowData} />
  },
  {
    name: '练习次数',
    dataIndex: 'exerciseTimes',
    width: '15%'
  },
  {
    name: '通过率',
    dataIndex: 'passRate',
    width: '15%'
  },
  {
    name: '难度',
    dataIndex: 'difficulty',
    width: '15%'
  }
];

export default columnsData;
