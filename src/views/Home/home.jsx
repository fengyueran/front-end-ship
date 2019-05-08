import React from 'react';
import Table from 'src/components/Table';
import { VerticalBox } from '@xinghunm/widgets';
import NavBar from '../NavBar';

const columnsData = [
  {
    name: '#',
    dataIndex: 'questionNum',
    width: '25%'
  },
  {
    name: '题名',
    dataIndex: 'questionTtile',
    render: () => <div>123</div>
  },
  {
    name: '练习次数',
    dataIndex: 'exerciseTimes',
    width: '20%',
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

const dataSource = [
  {
    questionNum: 120,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 121,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 122,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 124,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 125,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 126,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 127,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 120,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 121,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 122,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 124,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 125,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 126,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 127,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 120,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 121,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 122,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 124,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 125,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 126,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 127,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 123,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  },
  {
    questionNum: 127,
    questionTtile: 'asdfsa',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  }
];

const Home = () => {
  return (
    <VerticalBox>
      <NavBar />
      <Table columns={columnsData} dataSource={dataSource} />
    </VerticalBox>
  );
};

export default Home;
