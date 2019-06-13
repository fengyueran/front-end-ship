import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import styled from 'styled-components';
import Table from 'src/components/Table';
import DropDown from 'src/components/DropDown';
import { LineBox, VerticalBox, Sizer, Spin } from '@xinghunm/widgets';

const Content = styled(VerticalBox)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
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

const TableContainer = styled.div`
  height: calc(100% - 63px);
  background: #fff;
`;

const FilterItems = [
  { name: '状态', items: ['未做', '未完成', '已完成'] },
  { name: '标签', items: ['JS', 'CSS', '其他'] }
];

const propTypes = {
  columnsData: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

const QuestionTable = ({ columnsData, questions, onChange }) => (
  <Content>
    <Header>
      <HeaderTitle>
        <strong>练习题</strong>
      </HeaderTitle>
      <SearchBox>
        <Input placeholder="搜索题目" onChange={onChange} />
      </SearchBox>
      <Sizer />
      {map(FilterItems, ({ name, items }) => (
        <DropDown key={name} name={name} items={items} />
      ))}
    </Header>
    <TableContainer>
      {questions.length > 0 ? (
        <Table
          columns={columnsData}
          dataSource={questions}
          pagination={{ pageSize: 14 }}
        />
      ) : (
        <Spin />
      )}
    </TableContainer>
  </Content>
);

QuestionTable.propTypes = propTypes;

export default QuestionTable;
