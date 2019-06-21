import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';
import ButtonBase from 'src/components/ButtonBase';

const Container = styled(LineBox)`
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  padding: 0 15px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: inset 0 -1px #eee;
  @media (hover: none) {
    display: none;
  }
`;

const Button = styled(ButtonBase)`
  border: none;
  padding: 0;
  min-width: auto;
  color: #afbdc3;
  :hover {
    background: none;
    color: #47555c;
  }
  transition: color 500ms;
`;

const FullScreenIcon = styled.i.attrs(() => ({
  className: 'fa fa-arrows-alt'
}))``;

const propTypes = {
  toggleFullScreen: PropTypes.func.isRequired
};
const ToolBar = ({ toggleFullScreen }) => {
  return (
    <Container>
      <Button title="全屏" hasRipple={false} onClick={toggleFullScreen}>
        <FullScreenIcon />
      </Button>
    </Container>
  );
};

ToolBar.propTypes = propTypes;

const mapDispatch = ({ question: { toggleFullScreen } }) => ({
  toggleFullScreen
});

const ToolBarContainer = connect(
  null,
  mapDispatch
)(ToolBar);

export default ToolBarContainer;
