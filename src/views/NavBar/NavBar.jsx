import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ButtonSet from 'src/components/ButtonSet';
import { ROUTES } from 'src/utils/constants';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  flex-shrink: 0;
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

const propTypes = {
  history: PropTypes.object.isRequired
};

const buttons = ['题库', '博客', '组件', '前端资源'];

const NavBar = ({ history }) => {
  const handleBtnClick = index => {
    let route;
    switch (index) {
      case 0:
        route = ROUTES.QUESTION;
        break;
      case 1:
        route = ROUTES.BLOG;
        break;
      case 2:
        route = ROUTES.RESOURCE;
        break;
      default:
        route = ROUTES.RESOURCE;
    }
    history.push(route);
  };
  return (
    <Header>
      <Ul>
        <Item className="fa fa-outdent" />
        <Item className="fa fa-plus" value="New" />
        <ButtonSet buttons={buttons} onChange={handleBtnClick} />
      </Ul>
    </Header>
  );
};

NavBar.propTypes = propTypes;

export default withRouter(NavBar);
