import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';

const propTypes = {
  rowData: PropTypes.object,
  setCurrentQuestion: PropTypes.func.isRequired
};
const TitleCell = ({ rowData, setCurrentQuestion }) => {
  const { id, title } = rowData;
  const handleClick = () => {
    setCurrentQuestion(rowData);
  };
  return (
    <Link onClick={handleClick} to={`${ROUTES.ANSWER}/${id}`}>
      {title}
    </Link>
  );
};

TitleCell.propTypes = propTypes;

export default TitleCell;
