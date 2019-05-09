import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'lodash-es';

const UlWrapper = styled.a`
  position: relative;
  &:focus {
    outline: none;
    ul {
      display: block;
    }
  }
`;

const UlBtn = styled.div`
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  border-radius: 4px;
`;

const ListGroup = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  display: none;
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
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
  color: #333;
  :hover {
    background: #6b9bda;
  }
}
`;

const CheckedIcon = styled.i`
  margin-right: 5px;
  visibility: hidden;
`;

const Caret = styled.span`
  margin-left: 3px;
`;

const DropDown = ({ name, items }) => (
  <UlWrapper href="#">
    <UlBtn>
      {name}
      <Caret className="fa fa-caret-down" />
    </UlBtn>
    <ListGroup>
      {map(items, item => (
        <ListGroupItem key={item}>
          <CheckedIcon className="fa fa-check" />
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  </UlWrapper>
);

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default DropDown;
