import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from 'lodash-es';
import client from 'src/webapi';
import columnsData from './column';

const mapState = state => ({
  questions: state.question.questions
});

const mapDispatch = ({ question: { initQuestions } }) => ({
  initQuestions
});

const withData = WrappedComponent => {
  const propTypes = {
    questions: PropTypes.array.isRequired,
    initQuestions: PropTypes.func.isRequired
  };

  const Wrapper = ({ questions, initQuestions }) => {
    const [searchedQuestions, setSearchedQuestions] = useState();
    const handleSearch = e => {
      const filteredData = filter(questions, ({ title }) =>
        title.includes(e.target.value)
      );
      setSearchedQuestions(filteredData);
    };

    useEffect(() => {
      client.getQuestions().then(data => {
        initQuestions(data);
      });
    }, [initQuestions]);

    const questionsToShow = searchedQuestions || questions;
    return (
      <WrappedComponent
        columnsData={columnsData}
        questions={questionsToShow}
        onChange={handleSearch}
      />
    );
  };

  Wrapper.propTypes = propTypes;
  const Container = connect(
    mapState,
    mapDispatch
  )(Wrapper);

  return Container;
};

export default withData;
