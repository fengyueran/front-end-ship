import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';

const Container = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 400px;
`;

const propTypes = {
  rowData: PropTypes.object,
  updateQuestionParam: PropTypes.func.isRequired
};
const TitleCell = ({ rowData, updateQuestionParam }) => {
  const { id, title } = rowData;
  const handleClick = () => {
    updateQuestionParam({ currentQuestion: rowData });
  };
  return (
    <Container title={title}>
      <Link onClick={handleClick} to={`${ROUTES.ANSWER}/${id}`}>
        {title}
      </Link>
    </Container>
  );
};

TitleCell.propTypes = propTypes;

export default TitleCell;
