import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #30373e;
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 0 5px;
`;

const Anchor = styled.a`
  color: rgba(255, 255, 255, 0.7);
  line-height: 57px;
  padding: 0 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:hover {
    color: #ffffff;
    i {
      color: #ffffff;
    }
  }
`;

const BaseIcon = styled.i`
  height: 100%;
  color: #c1c3c5;
  margin-right: ${props => (props.value ? '5px' : 0)};
`;

const Item = ({ className, value }) => (
  <Li>
    <Anchor>
      <BaseIcon className={className} value />
      {value}
    </Anchor>
  </Li>
);

Item.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string.isRequired
};

class NavBar extends Component {
  render() {
    return (
      <Header>
        <Ul>
          <Item className="fa fa-outdent" />
          <Item className="fa fa-plus" value="New" />
        </Ul>
      </Header>
    );
  }
}

export default NavBar;
