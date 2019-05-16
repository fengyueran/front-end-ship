import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';

const TitleCell = ({ rowData, setCurrentQuestion }) => {
  const { id, questionTtile } = rowData;
  const handleClick = () => {
    setCurrentQuestion(rowData);
  };
  return (
    <Link onClick={handleClick} to={`${ROUTES.ANSWER}/${id}`}>
      {questionTtile}
    </Link>
  );
};

TitleCell.propTypes = {
  rowData: PropTypes.object,
  setCurrentQuestion: PropTypes.func.isRequired
};

export default TitleCell;
