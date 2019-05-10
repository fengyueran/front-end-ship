import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import styled from 'styled-components';
import { LineBox, Button, VerticalBox, Sizer } from '@xinghunm/widgets';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';

const CodeArea = styled(VerticalBox)`
  width: 100%;
  height: 100%;
  border: 1px solid;
  padding: 20px;
`;

const Editor = styled.div`
  flex-grow: 1;
  border: 1px solid;
  position: relative;
`;

const ButtonContainer = styled(LineBox)`
  margin-top: 20px;
`;

const ResultArea = styled.div`
  height: 100px;
  border: 1px solid;
  margin-top: -1px;
`;

class CodeEditor extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    excuteCode: PropTypes.func,
    handleCodeChange: PropTypes.func
  };

  render() {
    const { value, result, excuteCode, handleCodeChange } = this.props;
    return (
      <CodeArea>
        <Editor>
          <CodeMirror
            value={value}
            options={{
              mode: 'javascript',
              lineNumbers: true,
              lineWrapping: true,
              extraKeys: {
                Tab: 'autocomplete'
              }
            }}
            onChange={handleCodeChange}
          />
        </Editor>
        <ResultArea>{result}</ResultArea>
        <ButtonContainer>
          <Sizer />
          <Button onClick={excuteCode}>执行</Button>
          <Sizer.X size={25} />
          <Button onClick={excuteCode}>提交</Button>
        </ButtonContainer>
      </CodeArea>
    );
  }
}

export default CodeEditor;
