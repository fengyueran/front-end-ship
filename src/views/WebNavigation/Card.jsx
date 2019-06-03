import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox, VerticalBox } from '@xinghunm/widgets';

const Img = styled.img`
  width: 160px;
  height: 90px;
`;

const Container = styled.div`
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  border: solid;
`;
const Description = styled.span``;

const propTypes = {
  siteInfo: PropTypes.object.isRequired
};

const Card = ({ siteInfo }) => {
  const { src, description } = siteInfo;
  return (
    <Container>
      <Img src={src} />
      <Description>{description}</Description>
    </Container>
  );
};

Card.propTypes = propTypes;

export default Card;
