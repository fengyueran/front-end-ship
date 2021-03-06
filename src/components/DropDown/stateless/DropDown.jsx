import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UlWrapper = styled.a`
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const UlBtn = styled.div`
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  color: #525252;
  cursor: pointer;
  border-radius: 4px;
`;

const ListGroup = styled.ul`
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 0;
  margin: 2px 0 0;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  li:first-of-type {
    border-radius: 4px 4px 0 0;
  }
  li:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;

const ListGroupItem = styled.li`
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  color: #525252;
  :hover {
    background: #eaedf1;
  }
`;

const CheckedIcon = styled.i`
  margin-right: 5px;
  color: #457fca;
  visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
`;

const Caret = styled.span`
  margin-left: 3px;
`;

const propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isShowMenus: PropTypes.bool.isRequired,
  selectedItems: PropTypes.array.isRequired,
  dropDownRef: PropTypes.object.isRequired,
  onDropDown: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

const DropDown = ({
  name,
  items,
  isShowMenus,
  selectedItems,
  dropDownRef,
  onSelect,
  onDropDown
}) => (
  <UlWrapper ref={dropDownRef}>
    <UlBtn onClick={onDropDown}>
      {name}
      <Caret className="fa fa-caret-down" />
    </UlBtn>
    <ListGroup onClick={onSelect} isShow={isShowMenus}>
      {items.map((item, index) => (
        <ListGroupItem key={item} data-index={index}>
          <CheckedIcon
            className="fa fa-check"
            selected={selectedItems.indexOf(item) >= 0}
          />
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  </UlWrapper>
);

DropDown.propTypes = propTypes;

export default DropDown;
