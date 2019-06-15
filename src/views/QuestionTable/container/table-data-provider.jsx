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

const filterQuestions = (questions, selectedTags, record) => {
  let filteredData = questions;
  forEach(selectedTags, (tags, key) => {
    switch (key) {
      case OPTIONS.STATUS:
        if (tags.indexOf(TAGS.FINISHED) >= 0) {
          filteredData = record.finished;
        }
        break;
      case OPTIONS.TAG:
        if (tags.length > 0) {
          filteredData = filter(filteredData, ({ tags: questionTags }) => {
            for (let i = 0; i < questionTags.length; i++) {
              const currentTag = questionTags[i];
              const found = find(tags, tag => currentTag === tag);
              if (found) return true;
            }
            return false;
          });
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
  return filteredData;
};

const withData = WrappedComponent => {
  const propTypes = {
    record: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    initQuestions: PropTypes.func.isRequired
  };

  const Wrapper = ({ questions, record, initQuestions }) => {
    const [searchedQuestions, setSearchedQuestions] = useState();
    const isLoading = useRef(true);
    const selectedTagsRef = useRef({});

    const handleSearch = useCallback(
      e => {
        const filteredData = filter(questions, ({ title }) =>
          title.includes(e.target.value)
        );
        setSearchedQuestions(filteredData);
      },
      [questions]
    );

    const deleteTag = useCallback(
      e => {
        const tag = e.target.getAttribute('data-tag');
        const keys = Object.keys(selectedTagsRef.current);
        for (let i = 0; i < keys.length; i++) {
          const type = keys[i];
          const tags = selectedTagsRef.current[type];
          const foundIndex = findIndex(tags, tagName => tagName === tag);
          if (foundIndex >= 0) {
            tags.splice(foundIndex, 1);
            break;
          }
        }
        const filteredData = filterQuestions(
          questions,
          selectedTagsRef.current,
          record
        );
        setSearchedQuestions(filteredData);
      },
      [questions, record]
    );

    const questionTypeChange = useCallback(
      ({ name, item, multiSelect }) => {
        const option = selectedTagsRef.current[name] || [];
        const foundIndex = findIndex(option, v => item === v);
        if (multiSelect) {
          if (foundIndex >= 0) {
            option.splice(foundIndex, 1);
          } else {
            option.push(item);
          }
          selectedTagsRef.current[name] = option;
        } else {
          selectedTagsRef.current[name] = foundIndex >= 0 ? [] : [item];
        }

        const filteredData = filterQuestions(
          questions,
          selectedTagsRef.current,
          record
        );
        setSearchedQuestions(filteredData);
      },
      [questions, record]
    );

    useEffect(() => {
      client.getQuestions().then(data => {
        isLoading.current = false;
        initQuestions(data);
      });
    }, [initQuestions]);

    const questionsToShow = searchedQuestions || questions;
    let selectedTags = [];
    forEach(selectedTagsRef.current, tags => {
      selectedTags = selectedTags.concat(tags);
    });

    return (
      <WrappedComponent
        columnsData={columnsData}
        questions={questionsToShow}
        isLoading={isLoading.current}
        onChange={handleSearch}
        deleteTag={deleteTag}
        selectedTags={selectedTags}
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
