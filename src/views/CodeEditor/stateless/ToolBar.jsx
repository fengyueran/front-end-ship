import React from 'react';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: inset 0 -1px #eee;
`;

const ToolBar = () => {
  return <Container />;
};

export default ToolBar;
