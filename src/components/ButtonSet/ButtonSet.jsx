import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineBox } from '@xinghunm/widgets';
import ButtonBase from '../ButtonBase';

const Button = styled(ButtonBase)`
  border: none;
  color: ${props => (props.active ? '#fff' : 'rgba(255,255,255,0.7)')};
  font-weight: bold;
  font-size: 14px;
  :hover {
    background-color: rgba(202, 210, 220, 0.1);
  }
`;

const propTypes = {
  buttons: PropTypes.array.isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func
};

const ButtonSet = ({ buttons, onChange, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const handleClick = index => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };

  return (
    <LineBox>
      {buttons.map((name, index) => (
        <Button
          key={name}
          active={index === activeIndex}
          onClick={() => handleClick(index)}
        >
          {name}
        </Button>
      ))}
    </LineBox>
  );
};

ButtonSet.propTypes = propTypes;

export default ButtonSet;
