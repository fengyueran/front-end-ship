import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from '@xinghunm/widgets';

const Container = styled(Col)`
  width: 100%;
  border-left: 7px solid #ccc;
  transition: border-left 0.45s;
  margin-bottom: 1.5px;
  background: #fafafa;
  padding: 14px;
  flex: 0 0 auto;
  :hover {
    cursor: pointer;
    border-color: #457fca;
  }
`;

const Title = styled.h1`
  color: #457fca;
  font-size: 21px;
  line-height: 2;
  margin: 0;
`;

const Description = styled.p`
  color: #817c7c;
  margin: 0;
  line-height: 1.8;
  font-weight: 400;
  font-size: 16px;
`;

const Time = styled.time`
  color: #817c7c;
  display: block;
  margin: 7px 0;
  font-weight: 400;
  font-size: 14px;
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired
};

const BriefCard = ({ id, title, description, date }) => (
  <Container data-id={id}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Time dateTime={date}>{date}</Time>
  </Container>
);

BriefCard.propTypes = propTypes;

export default BriefCard;
