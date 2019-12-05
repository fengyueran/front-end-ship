import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '@xinghunm/widgets';

const HeaderTitle = styled.div`
  position: relative;
  color: #457fca;
  ::before {
    position: absolute;
    width: 2px;
    height: 26px;
    left: -15px;
    top: 0;
    content: '';
    background-color: #457fca;
  }
`;

const Header = styled(Row)`
  padding: 0 15px;
  border-radius: 3px 3px 0 0;
  background: #ffffff;
  overflow: visible;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
`;

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
  margin-bottom: 6px;
  &:focus {
    transition: background 0.3s ease-out;
    background-size: 100% 2px, 100% 1px;
    outline: none;
  }
`;

const SearchBoxWrapper = styled.div`
  margin-left: 50px;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
  children: PropTypes.node
};

const SearchBar = ({
  title,
  placeholder,
  onChange,
  inputRef,
  children,
  ...res
}) => (
  <Header {...res}>
    <HeaderTitle>
      <strong>{title}</strong>
    </HeaderTitle>
    <SearchBoxWrapper>
      <Input placeholder={placeholder} onChange={onChange} ref={inputRef} />
    </SearchBoxWrapper>
    {children}
  </Header>
);

SearchBar.propTypes = propTypes;

export default SearchBar;
