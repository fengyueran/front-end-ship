import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import client from 'src/webapi';
import { QUESTION_TYPES, TABS } from 'src/utils/constants';

const withData = WrappedComponent => {
  const propTypes = {
    currentQuestion: PropTypes.object.isRequired
  };

  const Container = props => {
    const { currentQuestion } = props;
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

    const onTabChange = useCallback(
      index => {
        setActiveTab(tabs[index]);
      },
      [tabs]
    );

    return (
      <WrappedComponent
        html={html}
        activeTab={activeTab}
        tabs={tabs}
        onTabChange={onTabChange}
        {...props}
      />
    );
  };
  Container.propTypes = propTypes;
  return Container;
};

export default withData;
