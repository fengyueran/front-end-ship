import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import useResizeBarStatus from '../container/use-resize-bar-status';

const VerticalBar = styled(VerticalBox)`
  width: 10px;
  height: 100%;
  background: ${props =>
    props.isMouseDown
      ? '#d1dff180'
      : 'linear-gradient(180deg,#f5f5f5 10%,#fff 90%)'};
  justify-content: center;
  align-items: center;
  :hover {
    cursor: col-resize;
    background: #d1dff180;
  }
  @media (hover: none) {
    display: none;
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
  const { isMouseDown, handleMouseDown } = useResizeBarStatus(onMouseDown);
  return (
    <VerticalBar
      ref={getRef}
      onMouseDown={handleMouseDown}
      isMouseDown={isMouseDown}
    >
      <Ellipsis>••••••</Ellipsis>
    </VerticalBar>
  );
};

ResizeBar.propTypes = propTypes;

export default React.memo(ResizeBar);
