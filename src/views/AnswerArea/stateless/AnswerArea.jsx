import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox, Spin } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
import { VIEW_SIZE } from 'src/utils/constants';
import TabBar from './TabBar';
import PickBar from './QuestionPickBar';
import withData from '../container/picker-bar-data-provider';

const {
  NAV_BAR_HEIGHT,
  QUESTION_INFO_BAR_HEIGHT,
  ANSWER_PAGE_TAB_BAR_HEIGHT,
  QUESTION_PICKER_BAR_HEIGHT
} = VIEW_SIZE;

const resHeight =
  NAV_BAR_HEIGHT +
  QUESTION_INFO_BAR_HEIGHT +
  ANSWER_PAGE_TAB_BAR_HEIGHT +
  QUESTION_PICKER_BAR_HEIGHT;

const QuestionPickBar = withData(PickBar);

const Container = styled(VerticalBox).attrs(({ flexGrow }) => ({
  style: { flex: `${flexGrow} 0 0` }
}))`
  height: 100%;
  overflow: auto;
  background: #fff;
  @media (hover: none) {
    min-width: 100vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  border: 1px solid #eee;
  @media (hover: none) {
    min-height: calc(100vh - ${resHeight}px);
  }
`;

const SpinWrapper = styled.div`
  width: 100%;
`;

const Article = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
  ul {
    padding-left: 28px;
  }
  -webkit-overflow-scrolling: touch;
`;

const propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  flexGrow: PropTypes.number.isRequired,
  isShowEditor: PropTypes.bool.isRequired,
  content: PropTypes.object,
  getRef: PropTypes.object.isRequired,
  onTabChange: PropTypes.func
};

const AnswerArea = ({
  isShowEditor,
  content,
  tabs,
  activeTabIndex,
  flexGrow,
  getRef,
  onTabChange
}) => {
  let contentChild = (
    <SpinWrapper>
      <Spin />
    </SpinWrapper>
  );
  if (isShowEditor) {
    contentChild = <Editor />;
  } else if (content) {
    contentChild = <Article dangerouslySetInnerHTML={content} />;
  }

  return (
    <Container ref={getRef} flexGrow={flexGrow}>
      <TabBar
        tabs={tabs}
        onTabChange={onTabChange}
        activeTabIndex={activeTabIndex}
      />
      <Content>{contentChild}</Content>
      <QuestionPickBar />
    </Container>
  );
};

AnswerArea.propTypes = propTypes;

export default AnswerArea;
