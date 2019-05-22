import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
import { TABS_NAME } from 'src/utils/constants';
import TabBar from './TabBar';
import PickBar from './QuestionPickBar';
import withData from '../container/picker-bar-data-provider';

const QuestionPickBar = withData(PickBar);

const Container = styled(VerticalBox).attrs(({ flexGrow }) => ({
  style: { flex: `${flexGrow} 0 0` }
}))`
  height: 100%;
  overflow: auto;
  background: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid #eee;
`;

const Answer = styled.div`
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
`;

const propTypes = {
  html: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  flexGrow: PropTypes.number.isRequired,
  getRef: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired
};

const AnswerArea = ({
  html,
  activeTab,
  tabs,
  flexGrow,
  getRef,
  onTabChange
}) => {
  const isShowAnswer = activeTab === TABS_NAME.REFERENCE_ANSWER;
  return (
    <Container ref={getRef} flexGrow={flexGrow}>
      <TabBar tabs={tabs} onTabChange={onTabChange} />
      <Content>
        {isShowAnswer ? <Answer dangerouslySetInnerHTML={html} /> : <Editor />}
      </Content>
      <QuestionPickBar />
    </Container>
  );
};

AnswerArea.propTypes = propTypes;

export default AnswerArea;
