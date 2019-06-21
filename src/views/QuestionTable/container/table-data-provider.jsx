import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter, findIndex } from 'lodash-es';
import client from 'src/webapi';
import columnsData from './column';

const mapState = state => ({
  questions: state.question.questions,
  record: state.question.record
});

const mapDispatch = ({
  question: { initQuestions, filterQuestionsByTag }
}) => ({
  initQuestions,
  filterQuestionsByTag
});

const withData = WrappedComponent => {
  const propTypes = {
    questions: PropTypes.array.isRequired,
    initQuestions: PropTypes.func.isRequired,
    filterQuestionsByTag: PropTypes.func.isRequired
  };

  const Wrapper = ({ questions, initQuestions, filterQuestionsByTag }) => {
    const [questionsToShow, setQuestionsToShow] = useState(questions);
    const [currentPage, setCurrentPage] = useState(1);
    const searchQuestionKeyRef = useRef();
    const searchBoxRef = useRef();

    const isLoading = useRef(true);
    const selectedTagsRef = useRef({});
    const isMobile = window.innerWidth < 500;
    const column = isMobile ? columnsData.slice(0, 3) : columnsData;

    const onPageChange = useCallback(page => {
      setCurrentPage(page);
    }, []);

    const handleSearch = useCallback(
      async e => {
        searchQuestionKeyRef.current = e.target.value;

        let filteredData = filter(questions, ({ title }) =>
          title.includes(e.target.value)
        );
        const { searchValue, ...tags } = selectedTagsRef.current;
        if (Object.keys(tags).length > 0) {
          filteredData = await filterQuestionsByTag(tags);
        }
        if (searchQuestionKeyRef.current) {
          selectedTagsRef.current.searchValue = [searchQuestionKeyRef.current];
        } else {
          delete selectedTagsRef.current.searchValue;
        }
        setQuestionsToShow(filteredData);
      },
      [filterQuestionsByTag, questions]
    );

    const deleteTag = useCallback(
      async e => {
        const tag = e.target.getAttribute('data-tag');
        const keys = Object.keys(selectedTagsRef.current);
        for (let i = 0; i < keys.length; i++) {
          const type = keys[i];
          const tags = selectedTagsRef.current[type];
          const foundIndex = findIndex(tags, tagName => tagName === tag);
          if (foundIndex >= 0) {
            tags.splice(foundIndex, 1);
            if (type === 'searchValue') {
              searchQuestionKeyRef.current = null;
              searchBoxRef.current.value = '';
            }
            break;
          }
        }

        let filteredData = await filterQuestionsByTag(selectedTagsRef.current);

        if (searchQuestionKeyRef.current) {
          filteredData = filter(filteredData, ({ title }) =>
            title.includes(searchQuestionKeyRef.current)
          );
        }

        setQuestionsToShow(filteredData);
      },
      [filterQuestionsByTag]
    );

    const questionTypeChange = useCallback(
      async ({ name, item, multiSelect }) => {
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

        let filteredData = await filterQuestionsByTag(selectedTagsRef.current);

        if (searchQuestionKeyRef.current) {
          filteredData = filter(filteredData, ({ title }) =>
            title.includes(searchQuestionKeyRef.current)
          );
        }
        setQuestionsToShow(filteredData);
      },
      [filterQuestionsByTag]
    );

    useEffect(() => {
      client.getQuestions().then(data => {
        isLoading.current = false;
        initQuestions(data);
      });
    }, [initQuestions]);

    useEffect(() => {
      setQuestionsToShow(questions);
    }, [questions]);

    console.log('questionsToShow', questionsToShow);
    return (
      <WrappedComponent
        columnsData={column}
        questions={questionsToShow}
        isLoading={isLoading.current}
        onChange={handleSearch}
        deleteTag={deleteTag}
        currentPage={currentPage}
        onPageChange={onPageChange}
        searchBoxRef={searchBoxRef}
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
