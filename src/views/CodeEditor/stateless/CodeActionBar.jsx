import React from 'react';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';

const Container = styled(LineBox)`
  width: 100%;
  padding: 15px;
  background: gray;
  flex-shrink: 0;
`;

const CodeActionBar = () => {
  return <Container />;
};

export default CodeActionBar;
