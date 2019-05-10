import React from 'react';

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
    render: () => <div>123</div>
  },
  {
    name: '练习次数',
    dataIndex: 'exerciseTimes',
    width: '15%',
    render: () => <div>123</div>
  },
  {
    name: '通过率',
    dataIndex: 'passRate',
    width: '15%',
    render: () => <div>123</div>
  },
  {
    name: '难度',
    dataIndex: 'difficulty',
    width: '15%',
    render: () => <div>123</div>
  }
];

export default columnsData;
