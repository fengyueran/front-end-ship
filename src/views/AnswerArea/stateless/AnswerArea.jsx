import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox, Spin } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
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

const Article = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  background: #fff;
  ul {
    padding-left: 28px;
  }
`;

const propTypes = {
  tabs: PropTypes.array.isRequired,
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
  flexGrow,
  getRef,
  onTabChange
}) => {
  let contentChild = <Spin />;
  if (isShowEditor) {
    contentChild = <Editor />;
  } else if (content) {
    contentChild = <Article dangerouslySetInnerHTML={content} />;
  }

  return (
    <Container ref={getRef} flexGrow={flexGrow}>
      <TabBar tabs={tabs} onTabChange={onTabChange} />
      <Content>{contentChild}</Content>
      <QuestionPickBar />
    </Container>
  );
};

AnswerArea.propTypes = propTypes;

export default AnswerArea;
