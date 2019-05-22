import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
import ToolBar from './ToolBar';
import CodeActionBar from './CodeActionBar';
import ResultArea from './ResultArea';

const CodeArea = styled(VerticalBox)`
  flex: 1 0 0;
  min-width: 200px;
  height: 100%;
`;

const Content = styled(VerticalBox)`
  height: 100%;
  border: 1px solid #eee;
`;

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isShowConsole: PropTypes.bool.isRequired,
  executeCode: PropTypes.func.isRequired,
  getRef: PropTypes.object.isRequired,
  toggleConsole: PropTypes.func.isRequired,
  handleCodeChange: PropTypes.func.isRequired
};

const CodeEditor = props => {
  const {
    value,
    result,
    isShowConsole,
    executeCode,
    getRef,
    toggleConsole,
    handleCodeChange
  } = props;
  return (
    <CodeArea ref={getRef}>
      <ToolBar />
      <Content>
        <Editor value={value} onChange={handleCodeChange} />
        {isShowConsole && <ResultArea result={result} />}
      </Content>
      <CodeActionBar executeCode={executeCode} toggleConsole={toggleConsole} />
    </CodeArea>
  );
};

CodeEditor.propTypes = propTypes;

export default CodeEditor;
