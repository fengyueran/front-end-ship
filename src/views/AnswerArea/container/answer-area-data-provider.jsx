import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { QUESTION_TYPES, TABS, TABS_NAME } from 'src/utils/constants';

const withData = WrappedComponent => {
  const propTypes = {
    currentQuestion: PropTypes.object.isRequired,
    getQuestionData: PropTypes.func.isRequired
  };

  const Container = props => {
    const { currentQuestion, getQuestionData } = props;
    const { id, questionDetail, answer, type } = currentQuestion;
    const tabs = TABS[type] || TABS[QUESTION_TYPES.SHORT_ANSWER];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
      setActiveTabIndex(0);
    }, [tabs, id]);

    useEffect(() => {
      if (type === QUESTION_TYPES.CODE && !questionDetail) {
        getQuestionData({ id, type: 'questionDetail' });
      }
    }, [id, getQuestionData, questionDetail, type]);

    const onTabChange = useCallback(
      index => {
        setActiveTabIndex(index);
        const isAnswerTab = index === 1;
        if (isAnswerTab && !answer) {
          getQuestionData({ id, type: 'answer' });
        }
      },
      [answer, getQuestionData, id]
    );

    const activeTab = tabs[activeTabIndex];
    const content =
      activeTab === TABS_NAME.REFERENCE_ANSWER ? answer : questionDetail;
    const isShowEditor =
      type === QUESTION_TYPES.SHORT_ANSWER &&
      activeTab === TABS_NAME.QUESTION_ANSWER;

    return (
      <WrappedComponent
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        content={content}
        isShowEditor={isShowEditor}
        onTabChange={onTabChange}
        {...props}
      />
    );
  };
  Container.propTypes = propTypes;

  const mapDispatch = ({ question: { getQuestionData } }) => ({
    getQuestionData
  });

  const Wrapper = connect(null, mapDispatch)(Container);

  return Wrapper;
};

export default withData;
