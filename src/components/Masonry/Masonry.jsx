import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  box-sizing: border-box;
`;

const ResizeDetectEl = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  width: ${props => `${props.width}px`};
`;

const Column = styled.span`
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  width: ${props => `${props.width}px`};
  & > * {
    width: ${props => `${props.width}px`};
  }
`;

const getCardWidth = () => {
  const screenWidth = window.screen.availWidth;
  let cardWidth = 100;
  if (screenWidth > 1200) {
    cardWidth = 380;
  } else if (screenWidth > 992) {
    cardWidth = 300;
  } else if (screenWidth > 768) {
    cardWidth = 240;
  }
  return cardWidth;
};

const propTypes = {
  children: PropTypes.node.isRequired
};

const containerHPadding = 10 * 2;
const cardHMargin = 10 * 2;

const Masonry = ({ children }) => {
  const [data, setData] = useState(children);
  const cardWidthRef = useRef(null);
  const containerRef = useRef(null);
  const resizeDetectElRef = useRef(null);
  const resizeDetectElOffset = useRef(null);

  const formateData = originChildren => {
    const tmpData = originChildren.slice();
    const cardWidth = cardWidthRef.current;
    const ref = containerRef.current;
    const clientWidth = ref.clientWidth;
    const columns = Math.floor(
      (clientWidth - containerHPadding) / (cardWidth + cardHMargin)
    );
    let formatedData;
    if (columns < tmpData.length) {
      const columnNum = Math.floor(tmpData.length / columns);
      let res = tmpData.length % columns;
      formatedData = [];
      while (tmpData.length > res) {
        let num = columnNum;
        if (res) {
          num += 1;
          res--;
        }
        formatedData.push(tmpData.splice(0, num));
      }
    } else {
      formatedData = tmpData;
    }
    return formatedData;
  };

  useEffect(() => {
    cardWidthRef.current = getCardWidth();
  }, []);

  useEffect(() => {
    if (children) {
      const formatedData = formateData(children);
      setData(formatedData);
    }
  }, [children]);

  useEffect(() => {
    window.onresize = () => {
      const oldOffset = resizeDetectElOffset.current;
      const offset = resizeDetectElRef.current.offsetLeft;
      const cardWidth = cardWidthRef.current;
      if (Math.abs(offset - oldOffset) >= cardWidth) {
        const formatedData = formateData(children);
        setData(formatedData);
      }
      resizeDetectElOffset.current = offset;
      return function cleanup() {
        window.onresize = null;
      };
    };
  }, [children]);

  return (
    <Container ref={containerRef} width={cardWidthRef.current}>
      {data &&
        containerRef.current &&
        data.map((column, index) => (
          <Column key={index} width={cardWidthRef.current}>
            {column}
          </Column>
        ))}
      <ResizeDetectEl
        ref={resizeDetectElRef}
        width={cardWidthRef.current + cardHMargin}
      />
    </Container>
  );
};

Masonry.propTypes = propTypes;

export default Masonry;
