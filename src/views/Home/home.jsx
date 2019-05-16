import React from 'react';
import { VerticalBox } from '@xinghunm/widgets';
import NavBar from '../NavBar';
import QuestionTable from '../QuestionTable';

const Home = () => (
  <VerticalBox>
    <NavBar />
    <QuestionTable />
  </VerticalBox>
);

export default Home;
