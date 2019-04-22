import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IconWrapper = styled.i`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SVG = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
  fill: currentcolor;
`;

const PrevImg = () => (
  <SVG viewBox="0 0 24 24">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </SVG>
);

const NextImg = () => (
  <SVG viewBox="0 0 24 24">
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
  </SVG>
);

const paginationActiveItemStyle = css`
  background-color: #337ab7;
  border-color: #337ab7;
  color: #fff;
  cursor: default;
`;

const paginationDisabledItemStyle = css`
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
`;

const PaginationItem = styled.li`
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  min-width: 32px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  outline: 0;
  ${props => props.isActive && paginationActiveItemStyle}
  ${props => props.disabled && paginationDisabledItemStyle}
  :hover {
    background-color: #eee;
    color: #23527c;
    ${props => props.isActive && paginationActiveItemStyle}
    ${props => props.disabled && paginationDisabledItemStyle}
  }
`;

const withIcon = Icon => {
  const Item = ({ disabled, onClick }) => (
    <PaginationItem disabled={disabled} onClick={onClick}>
      <IconWrapper>
        <Icon disabled={disabled} />
      </IconWrapper>
    </PaginationItem>
  );
  Item.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };
  return Item;
};

const PrevIcon = withIcon(PrevImg);
const NextIcon = withIcon(NextImg);

export { PaginationItem, PrevIcon, NextIcon };
