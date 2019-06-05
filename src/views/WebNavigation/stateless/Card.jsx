import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ICON_CLASS, WEBSITE_CARD_COLORS } from 'src/utils/constants';

const Container = styled.div`
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background: #fff;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 5px #457fca;
  }
`;

const InfoBar = styled.div`
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
  top: -1;
  height: 100%;
  color: #fff;
  font-size: 16px;
`;

const Img = styled.img`
  width: calc(100% - 16px);
  height: 150px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  position: relative;
  margin: 8px;
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

const Title = styled.span`
  font-weight: 500;
  color: #000;
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

const TrapezoidShape = ({ color }) => (
  <Trapezoid>
    <SVG width="50" height="32">
      <polygon
        fill={color}
        stroke="none"
        strokeWidth="1"
        points="0,0 50,0 30,32 0,32 0,0"
      />
    </SVG>
  </Trapezoid>
);

TrapezoidShape.propTypes = {
  color: PropTypes.string.isRequired
};

const propTypes = {
  siteInfo: PropTypes.object.isRequired
};

const Card = ({ siteInfo }) => {
  const { title, type, thumbnail, link, description } = siteInfo;
  return (
    <Container data-link={link}>
      <InfoBar>
        <TrapezoidShape color={WEBSITE_CARD_COLORS[type]} />
        <SiteTypeIcon type={type} />
        <Title>{title}</Title>
      </InfoBar>
      <Img src={`${process.env.SERVICE_URL}/${thumbnail}`} data-name={title} />
      <SeparateBar />
      <Introduction>
        <Description>{description}</Description>
      </Introduction>
    </Container>
  );
};

Card.propTypes = propTypes;

export default React.memo(Card);
