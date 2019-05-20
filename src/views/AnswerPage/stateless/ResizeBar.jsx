import React from 'react';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';

const VerticalBar = styled(VerticalBox)`
  width: 10px;
  height: 100%;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: col-resize;
  }
`;

const Ellipsis = styled.span`
  font-size: 8px;
  letter-spacing: 5px;
  transform: rotate(90deg);
  color: #457fca;
`;

const ResizeBar = () => {
  return (
    <VerticalBar>
      <Ellipsis>••••••</Ellipsis>
    </VerticalBar>
  );
};

export default ResizeBar;
