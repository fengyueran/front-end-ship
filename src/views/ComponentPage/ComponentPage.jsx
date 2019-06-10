import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  height: 100%;
`;

const ComponentPage = () => {
  return <Iframe src="http://localhost:3000" />;
};

export default ComponentPage;
