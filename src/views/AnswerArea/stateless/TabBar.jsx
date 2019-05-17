import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, Tabs } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  height: 40px;
  padding-right: 15px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: inset 0 -1px #eee;
`;

const propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabChange: PropTypes.func.isRequired
};

const TabBar = ({ tabs, onTabChange }) => (
  <Container>
    <Tabs tabs={tabs} onTabChange={onTabChange} />
  </Container>
);

TabBar.propTypes = propTypes;
export default TabBar;
