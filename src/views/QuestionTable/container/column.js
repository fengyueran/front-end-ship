import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';

const columnsData = [
  {
    name: '',
    width: '10px'
  },
  {
    name: '#',
    dataIndex: 'questionNum',
    width: '10%'
  },
  {
    name: '题名',
    dataIndex: 'questionTtile',
    render: (title, rowData) => (
      <Link to={`${ROUTES.ANSWER}/${rowData.id}`}>{title}</Link>
    )
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
