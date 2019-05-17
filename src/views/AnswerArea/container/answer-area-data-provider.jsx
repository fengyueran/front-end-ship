import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import client from 'src/webapi';
import { QUESTION_TYPES, TABS } from 'src/utils/constants';

const withData = WrappedComponent => {
  const propTypes = {
    currentQuestion: PropTypes.object.isRequired
  };

  const Container = ({ currentQuestion }) => {
    const { questionType } = currentQuestion;
    const tabs = TABS[questionType] || TABS[QUESTION_TYPES.SHORT_ANSWER];

    const [html, setHtml] = useState({ __html: null });
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const getHtml = async () => {
      client.getQuestionHtml().then(htmlObj => {
        if (htmlObj.__html) {
          setHtml(htmlObj);
        }
      });
    };

    useEffect(() => {
      getHtml();
    }, []);

    const onTabChange = index => {
      setActiveTab(tabs[index]);
    };

    return (
      <WrappedComponent
        html={html}
        activeTab={activeTab}
        tabs={tabs}
        currentQuestion={currentQuestion}
        onTabChange={onTabChange}
      />
    );
  };
  Container.propTypes = propTypes;
  return Container;
};

export default withData;
