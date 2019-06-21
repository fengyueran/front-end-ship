import React from 'react';
import styled from 'styled-components';
import { Spin } from '@xinghunm/widgets';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const SpinWrapper = () => (
  <Container>
    <Spin />
  </Container>
);

export default SpinWrapper;
