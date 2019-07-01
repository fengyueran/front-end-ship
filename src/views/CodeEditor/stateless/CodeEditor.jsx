import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import ToolBar from './ToolBar';
import withData from '../container/code-action-bar-data-provider';
import CodeActionBar from './CodeActionBar';
import Editor from '../../EditorView';
import ResultArea from './ResultArea';

const CodeActionBarContainer = withData(CodeActionBar);
const CodeArea = styled(VerticalBox)`
  flex: 1 0 0;
  min-width: 200px;
  height: 100%;
`;

const Content = styled(VerticalBox)`
  height: 100%;
  border: 1px solid #eee;
  min-height: 300px;
`;

const propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isShowConsole: PropTypes.bool.isRequired,
  executeCode: PropTypes.func.isRequired,
  getRef: PropTypes.object.isRequired,
  toggleConsole: PropTypes.func.isRequired
};

const CodeEditor = props => {
  const { result, isShowConsole, executeCode, getRef, toggleConsole } = props;
  return (
    <CodeArea ref={getRef}>
      <ToolBar />
      <Content>
        <Editor />
        {isShowConsole && <ResultArea result={result} />}
      </Content>
      <CodeActionBarContainer
        executeCode={executeCode}
        toggleConsole={toggleConsole}
      />
    </CodeArea>
  );
};

CodeEditor.propTypes = propTypes;

export default React.memo(CodeEditor);
