import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';

const Container = styled(VerticalBox)`
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  @media (hover: none) {
    padding: 0;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default Container;
