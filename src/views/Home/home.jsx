import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { VerticalBox } from '@xinghunm/widgets';
import { ROUTES } from 'src/utils/constants';
import NavBar from '../NavBar';
import QuestionTable from '../QuestionTable';
import WebNavigation from '../WebNavigation';
import AnswerPage from '../AnswerPage';

const Container = styled(VerticalBox)`
  width: 100%;
  height: 100%;
`;

const Content = styled(VerticalBox)`
  width: 100%;
  flex-grow: 1;
`;

const data = [
  {
    title: 'W3C1',
    description:
      'W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTMLW3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C2',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C3',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利dfdafsdfasdf组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C4',
    description:
      'W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的dfdsfasdfds标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C5',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C6',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利ddsafasdfasdfasd组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C7',
    description:
      'W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTMLW3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C8',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C9',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利dfdafsdfasdf组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C40',
    description:
      'W3C组织是制定网络标准的一个非赢利组织，像HTML、XHTML、CSS、XML的dfdsfasdfds标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C50',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  },
  {
    title: 'W3C60',
    description:
      'W3C组织是制定网络标准的dsfdsgsdfgsdf一个非赢利ddsafasdfasdfasd组织，像HTML、XHTML、CSS、XML的标准就是由W3C来定制，该网站可以查询到相关的标准。'
  }
];

const A = () => <WebNavigation sites={data} />;

const Home = () => (
  <Container>
    <NavBar />
    <Content>
      <Route exact path={ROUTES.ROOT} component={QuestionTable} />
      <Route path={ROUTES.QUESTION} component={QuestionTable} />
      <Route path={ROUTES.RESOURCE} component={A} />
      <Route path={ROUTES.ANSWER} component={AnswerPage} />
    </Content>
  </Container>
);

export default Home;
