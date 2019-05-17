import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Button, VerticalBox, Sizer, utils } from '@xinghunm/widgets';
import Editor from 'src/components/Editor';
import ToolBar from './ToolBar';
import CodeActionBar from './CodeActionBar';

const CodeArea = styled(VerticalBox)`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled(LineBox)`
  margin-top: 20px;
`;

const ResultArea = styled.div`
  height: 100px;
  border: 1px solid;
  margin-top: -1px;
`;

const StyledBtn = styled(Button)`
  font-size: ${props => `${props.fontSize || 13}px`};
  color: #000;
  border: solid #000 1px;
  outline: none;
  padding: 6px 18px;
  border-radius: 3px;
  margin: 0;
  min-height: 34px;
  :hover {
    background-color: ${utils.fade('#337ab7', 0.2)};
  }
  background: ${props => props.background || 'none'};
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
        <ToolBar />
        <Editor value={value} onChange={handleCodeChange} />
        <ResultArea>{result}</ResultArea>
        <CodeActionBar>
          <ButtonContainer>
            <Sizer />
            <StyledBtn onClick={excuteCode}>执行</StyledBtn>
            <Sizer.X size={25} />
            <StyledBtn background="#ddd" onClick={excuteCode}>
              提交
            </StyledBtn>
          </ButtonContainer>
        </CodeActionBar>
      </CodeArea>
    );
  }
}

export default CodeEditor;
