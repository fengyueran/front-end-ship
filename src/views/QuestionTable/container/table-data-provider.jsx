import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter, forEach, find, findIndex } from 'lodash-es';
import client from 'src/webapi';
import { OPTIONS, TAGS, NAMES } from 'src/utils/constants';
import columnsData from './column';

const mapState = state => ({
  questions: state.question.questions,
  record: state.question.record
});

const mapDispatch = ({ question: { initQuestions } }) => ({
  initQuestions
});

const withData = WrappedComponent => {
  const propTypes = {
    record: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    initQuestions: PropTypes.func.isRequired
  };

  const Wrapper = ({ questions, record, initQuestions }) => {
    const [searchedQuestions, setSearchedQuestions] = useState();
    const isLoading = useRef(true);
    const selectedTypes = useRef({});

    const handleSearch = useCallback(
      e => {
        const filteredData = filter(questions, ({ title }) =>
          title.includes(e.target.value)
        );
        setSearchedQuestions(filteredData);
      },
      [questions]
    );

    const questionTypeChange = useCallback(
      ({ name, item, multiSelect }) => {
        const option = selectedTypes.current[name] || [];
        const foundIndex = findIndex(option, v => item === v);
        if (multiSelect) {
          if (foundIndex >= 0) {
            option.splice(foundIndex, 1);
          } else {
            option.push(item);
          }
          selectedTypes.current[name] = option;
        } else {
          selectedTypes.current[name] = foundIndex >= 0 ? [] : [item];
        }

        let filteredData = questions;
        forEach(selectedTypes.current, (tags, key) => {
          switch (key) {
            case OPTIONS.STATUS:
              if (tags.indexOf(TAGS.FINISHED) >= 0) {
                filteredData = record.finished;
              }
              break;
            case OPTIONS.TAG:
              if (tags.length > 0) {
                filteredData = filter(
                  filteredData,
                  ({ tags: questionTags }) => {
                    for (let i = 0; i < questionTags.length; i++) {
                      const currentTag = questionTags[i];
                      const found = find(tags, tag => currentTag === tag);
                      if (found) return true;
                    }
                    return false;
                  }
                );
              }
              break;
            default: {
              if (tags.length > 0) {
                filteredData = filter(
                  filteredData,
                  ({ type }) => NAMES[type] === tags[0]
                );
              }
            }
          }
        });
        setSearchedQuestions(filteredData);
      },
      [questions, record.finished]
    );

    useEffect(() => {
      client.getQuestions().then(data => {
        isLoading.current = false;
        initQuestions(data);
      });
    }, [initQuestions]);

    const questionsToShow = searchedQuestions || questions;
    return (
      <WrappedComponent
        columnsData={columnsData}
        questions={questionsToShow}
        isLoading={isLoading.current}
        onChange={handleSearch}
        questionTypeChange={questionTypeChange}
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
