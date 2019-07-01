import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  width: 100%;
  background-image: linear-gradient(#457fca, #457fca),
    linear-gradient(#000, #d2d2d2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center 100%;
  background-color: transparent;
  transition: background 0s ease-out;
  font-weight: 400;
  padding: 6px 12px;
  &:focus {
    transition: background 0.3s ease-out;
    background-size: 100% 2px, 100% 1px;
    outline: none;
  }
`;

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.object
};

const SearchBox = ({ placeholder, onChange, inputRef }) => (
  <Input placeholder={placeholder} onChange={onChange} ref={inputRef} />
);
SearchBox.propTypes = propTypes;

export default SearchBox;
