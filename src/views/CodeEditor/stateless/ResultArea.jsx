import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from '@xinghunm/widgets';
import { NAMES } from 'src/utils/constants';

const Container = styled(Col)`
  background: #fff;
`;

const Title = styled.div`
  height: 35px;
  color: #37464e;
  padding-left: 5px;
  line-height: 35px;
  border-top: 1px solid #eee;
  background: #f5f5f5;
`;

const Result = styled.div`
  height: 150px;
  padding-left: 5px;
  border-top: 1px solid #eee;
`;

const propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const ResultArea = ({ result }) => (
  <Container>
    <Title>{NAMES.EXECUTE_RESULT}</Title>
    <Result>{result}</Result>
  </Container>
);

ResultArea.propTypes = propTypes;

export default React.memo(ResultArea);
