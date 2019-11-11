import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Tabs } from '@xinghunm/widgets';
import { VIEW_SIZE } from 'src/utils/constants';

const Container = styled(Row)`
  width: 100%;
  height: ${VIEW_SIZE.ANSWER_PAGE_TAB_BAR_HEIGHT}px;
  padding-right: 15px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: inset 0 -1px #eee;
`;

const propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
};

const TabBar = ({ tabs, activeTabIndex, onTabChange }) => (
  <Container>
    <Tabs
      tabs={tabs}
      onTabChange={onTabChange}
      activeTabIndex={activeTabIndex}
    />
  </Container>
);

TabBar.propTypes = propTypes;
export default React.memo(TabBar);
