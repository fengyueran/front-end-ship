import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from 'src/components/Table';
import DropDown from 'src/components/DropDown';
import { map, filter } from 'lodash-es';
import { LineBox, VerticalBox, Sizer } from '@xinghunm/widgets';

const Content = styled(VerticalBox)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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

const Header = styled(LineBox)`
  padding: 15px;
  border-radius: 3px 3px 0 0;
  background: #ffffff;
  border-bottom: 1px solid #ddd;
  overflow: visible;
`;

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

const SearchBox = styled.div`
  margin-left: 50px;
`;

const Input = styled.input`
  border: none;
  background-image: linear-gradient(#457fca, #457fca),
    linear-gradient(#000, #d2d2d2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 0px);
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

const FilterItems = [
  { name: '状态', items: ['未做', '未完成', '已完成'] },
  { name: '标签', items: ['JS', 'CSS', '其他'] }
];

const columnsData = [
  {
    name: '#',
    dataIndex: 'questionNum',
    width: '25%'
  },
  {
    name: '题名',
    dataIndex: 'questionTtile',
    render: () => <div>123</div>
  },
  {
    name: '练习次数',
    dataIndex: 'exerciseTimes',
    width: '20%',
    render: () => <div>123</div>
  },
  {
    name: '通过率',
    dataIndex: 'passRate',
    width: '15%',
    render: () => <div>123</div>
  },
  {
    name: '难度',
    dataIndex: 'difficulty',
    width: '15%',
    render: () => <div>123</div>
  }
];

const propTypes = {
  questions: PropTypes.array.isRequired
};

const QuestionTable = ({ questions }) => {
  const [searchedQuestions, setSearchedQuestions] = useState();
  const handleSearch = e => {
    const filteredData = filter(questions, ({ questionTtile }) =>
      questionTtile.includes(e.target.value)
    );
    setSearchedQuestions(filteredData);
  };

  const questionsToShow = searchedQuestions || questions;

  return (
    <Content>
      <Header>
        <HeaderTitle>
          <strong>练习题</strong>
        </HeaderTitle>
        <SearchBox>
          <Input placeholder="搜索题目" onChange={handleSearch} />
        </SearchBox>
        <Sizer />
        {map(FilterItems, ({ name, items }) => (
          <DropDown key={name} name={name} items={items} />
        ))}
      </Header>
      <Table columns={columnsData} dataSource={questionsToShow} />
    </Content>
  );
};

QuestionTable.propTypes = propTypes;

export default QuestionTable;
