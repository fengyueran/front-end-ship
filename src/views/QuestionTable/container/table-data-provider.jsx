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

const filterQuestionsByTag = (questions, selectedTags, record) => {
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
    const [questionsToShow, setQuestionsToShow] = useState(questions);
    const [currentPage, setCurrentPage] = useState(1);
    const searchQuestionKeyRef = useRef();

    const isLoading = useRef(true);
    const selectedTagsRef = useRef({});
    const isMobile = window.innerWidth < 500;
    const column = isMobile ? columnsData.slice(0, 3) : columnsData;

    const onPageChange = useCallback(page => {
      setCurrentPage(page);
    }, []);

    const handleSearch = useCallback(
      e => {
        searchQuestionKeyRef.current = e.target.value;
        let filteredData = filter(questions, ({ title }) =>
          title.includes(e.target.value)
        );
        if (Object.keys(selectedTagsRef.current).length > 0) {
          filteredData = filterQuestionsByTag(
            filteredData,
            selectedTagsRef.current,
            record
          );
        }

        setQuestionsToShow(filteredData);
      },
      [questions, record]
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

        let filteredData = filterQuestionsByTag(
          questions,
          selectedTagsRef.current,
          record
        );

        if (searchQuestionKeyRef.current) {
          filteredData = filter(filteredData, ({ title }) =>
            title.includes(searchQuestionKeyRef.current)
          );
        }

        setQuestionsToShow(filteredData);
      },
      [questions, record]
    );

    const questionTypeChange = useCallback(
      ({ name, item, multiSelect }) => {
        const option = selectedTagsRef.current[name] || [];
        const foundIndex = option.indexOf(item);
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

        let filteredData = filterQuestionsByTag(
          questions,
          selectedTagsRef.current,
          record
        );

        if (searchQuestionKeyRef.current) {
          filteredData = filter(filteredData, ({ title }) =>
            title.includes(searchQuestionKeyRef.current)
          );
        }

        setQuestionsToShow(filteredData);
      },
      [questions, record]
    );

    useEffect(() => {
      client.getQuestions().then(data => {
        isLoading.current = false;
        initQuestions(data);
      });
    }, [initQuestions]);

    return (
      <WrappedComponent
        columnsData={column}
        questions={questionsToShow}
        isLoading={isLoading.current}
        onChange={handleSearch}
        deleteTag={deleteTag}
        currentPage={currentPage}
        onPageChange={onPageChange}
        selectedTagsObj={selectedTagsRef.current}
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
