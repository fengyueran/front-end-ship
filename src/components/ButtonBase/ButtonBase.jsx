import styled from 'styled-components';
import { Button, utils } from '@xinghunm/widgets';

const ButtonBase = styled(Button).attrs(({ isDisable }) => ({
  hasRipple: !isDisable
}))`
  font-size: 13px;
  color: ${props => (props.isDisable ? '#afaeae' : '#37464e')};
  border: solid 1px;
  border-color: ${props => (props.isDisable ? '#E8E9E9' : '#c9d6da')};
  outline: none;
  padding: 6px 14px;
  border-radius: 3px;
  margin: 0;
  min-height: 34px;
  background: ${props => props.background || 'none'};
  :hover {
    background: ${props =>
      props.isDisable ? 'none' : utils.fade('#337ab7', 0.2)};
    cursor: ${props => (props.isDisable ? 'not-allowed' : 'pointer')};
  }
  @media (hover: none) {
    :hover {
      background: none;
    }
  }
  box-shadow: none;
`;

export default ButtonBase;
