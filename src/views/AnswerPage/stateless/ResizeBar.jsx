import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';

const VerticalBar = styled(VerticalBox)`
  width: 10px;
  height: 100%;
  background: #f5f5f5;
  background: gray;
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

const propTypes = {
  onMouseDown: PropTypes.func.isRequired,
  getRef: PropTypes.object.isRequired
};

const ResizeBar = ({ onMouseDown, getRef }) => {
  return (
    <VerticalBar ref={getRef} onMouseDown={onMouseDown}>
      <Ellipsis>••••••</Ellipsis>
    </VerticalBar>
  );
};

ResizeBar.propTypes = propTypes;

export default React.memo(ResizeBar);
