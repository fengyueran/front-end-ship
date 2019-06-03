import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ICON_CLASS } from 'src/utils/constants';

const Container = styled.div`
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background: #fff;
  border-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  background: #4780ca80;
  height: 32px;
  border-color: transparent;
  position: relative;
  border-radius: 3px 3px 0 0;
`;

const Trapezoid = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 0;
  height: 100%;
  color: red;
  font-size: 16px;
`;

const Img = styled.img`
  width: calc(100% - 10px);
  height: 150px;
  border: none;
  border-radius: 2px;
  position: relative;
  margin: 5px;
  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 100%;
    background-color: rgb(230, 230, 230);
    border: 1px dotted rgb(200, 200, 200);
  }

  :after {
    content: '\f127'' Broken Image of ' attr(data-name);
    display: block;
    font-size: 16px;
    font-style: normal;
    font-family: FontAwesome;
    color: rgb(100, 100, 100);
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

const SeparateBar = styled.div`
  width: calc(100% - 10px);
  height: 1px;
  margin: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Introduction = styled.div`
  padding: 5px 5px 5px 10px;
`;

const Name = styled.span`
  font-weight: 500;
  color: #4d585f;
  font-size: 16px;
  margin-left: 46px;
  line-height: 32px;
`;

const Description = styled.div`
  color: #6c757d;
`;

const SVG = styled.svg`
  border-top-left-radius: 3px;
`;

const SiteTypeIcon = ({ type }) => (
  <IconWrapper>
    <i className={ICON_CLASS[type]} aria-hidden="true" color="#E94C37" />
  </IconWrapper>
);

SiteTypeIcon.propTypes = {
  type: PropTypes.string.isRequired
};

const TrapezoidShape = () => (
  <Trapezoid>
    <SVG width="50" height="32">
      <polygon
        fill="#4BA3F9"
        stroke="none"
        strokeWidth="1"
        points="0,0 50,0 30,32 0,32 0,0"
      />
    </SVG>
  </Trapezoid>
);

const propTypes = {
  siteInfo: PropTypes.object.isRequired
};

const Card = ({ siteInfo }) => {
  const { name, src, description } = siteInfo;
  return (
    <Container>
      <Title>
        <TrapezoidShape />
        <SiteTypeIcon type="HTML" />
        <Name>W3C</Name>
      </Title>
      <Img src={src || ''} data-name={name} />
      <SeparateBar />
      <Introduction>
        <Description>{description}</Description>
      </Introduction>
    </Container>
  );
};

Card.propTypes = propTypes;

export default Card;
