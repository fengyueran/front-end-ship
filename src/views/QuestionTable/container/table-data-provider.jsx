import React, { useState, useEffect } from 'react';
import { filter } from 'lodash-es';
import client from 'src/webapi';
import columnsData from './column';

const withData = WrappedComponent => {
  const Container = () => {
    const [questions, setQeuestions] = useState([]);

    const [searchedQuestions, setSearchedQuestions] = useState();
    const handleSearch = e => {
      const filteredData = filter(questions, ({ title }) =>
        title.includes(e.target.value)
      );
      setSearchedQuestions(filteredData);
    };

    const getQuestions = async () => {
      client.getQuestions().then(data => {
        setQeuestions(data);
      });
    };

    useEffect(() => {
      getQuestions();
    }, []);

    const questionsToShow = searchedQuestions || questions;
    return (
      <WrappedComponent
        columnsData={columnsData}
        questions={questionsToShow}
        onChange={handleSearch}
      />
    );
  };

  return Container;
};

export default withData;
