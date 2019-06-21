import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Spin } from '@xinghunm/widgets';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const SpinWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ComponentPage = () => {
  const [iframeReady, setIframeReady] = useState();
  const iframeRef = useRef();
  useEffect(() => {
    iframeRef.current.onload = () => {
      setIframeReady(true);
    };
  }, []);

  return (
    <Container>
      <Iframe ref={iframeRef} src={process.env.STORYBOOK_URL} />
      {!iframeReady && (
        <SpinWrapper>
          <Spin />
        </SpinWrapper>
      )}
    </Container>
  );
};

export default ComponentPage;
