import React from 'react';
import styled from 'styled-components';
import { LineBox, Tabs } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  height: 40px;
  padding-right: 15px;
  background: #f5f5f5;
  flex-shrink: 0;
}`;

const TabBar = () => {
  return (
    <Container>
      <Tabs tabs={['问题描述', '问题解析']} />
    </Container>
  );
};

export default TabBar;
