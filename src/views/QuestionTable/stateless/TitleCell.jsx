import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/utils/constants';

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
    <Link onClick={handleClick} to={`${ROUTES.ANSWER}/${id}`}>
      {title}
    </Link>
  );
};

TitleCell.propTypes = propTypes;

export default TitleCell;
