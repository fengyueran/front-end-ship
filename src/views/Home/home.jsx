import React from 'react';
import { VerticalBox } from '@xinghunm/widgets';
import NavBar from '../NavBar';
import QuestionTable from '../QuestionTable';

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
    questionTtile: 'xhm',
    exerciseTimes: 5,
    passRate: '20%',
    difficulty: 1
  }
];

const Home = () => (
  <VerticalBox>
    <NavBar />
    <QuestionTable questions={dataSource} />
  </VerticalBox>
);

export default Home;
