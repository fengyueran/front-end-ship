import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash-es';
import columnsData from './column';

const withData = WrappedComponent => {
  const propTypes = {
    questions: PropTypes.array.isRequired
  };
  const Container = props => {
    const { questions } = props;
    const [searchedQuestions, setSearchedQuestions] = useState();
    const handleSearch = e => {
      const filteredData = filter(questions, ({ questionTtile }) =>
        questionTtile.includes(e.target.value)
      );
      setSearchedQuestions(filteredData);
    };

    const questionsToShow = searchedQuestions || questions;
    return (
      <WrappedComponent
        columnsData={columnsData}
        questions={questionsToShow}
        onChange={handleSearch}
      />
    );
  };
  Container.propTypes = propTypes;
  return Container;
};

export default withData;
