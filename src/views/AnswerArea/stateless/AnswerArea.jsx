import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
import { TABS_NAME } from 'src/utils/constants';
import TabBar from './TabBar';
import QuestionPickBar from './QuestionPickBar';

const Container = styled(VerticalBox)`
  height: 100%;
  flex: 1 0 0;
  overflow: auto;
  background: #fff;
`;

const Content = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
`;

const propTypes = {
  html: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

const AnswerArea = ({ html, activeTab, tabs, onTabChange }) => {
  const isShowAnswer = activeTab === TABS_NAME.REFERENCE_ANSWER;
  return (
    <Container>
      <TabBar tabs={tabs} onTabChange={onTabChange} />
      {isShowAnswer ? <Content dangerouslySetInnerHTML={html} /> : <Editor />}
      <QuestionPickBar />
    </Container>
  );
};

AnswerArea.propTypes = propTypes;

export default AnswerArea;
