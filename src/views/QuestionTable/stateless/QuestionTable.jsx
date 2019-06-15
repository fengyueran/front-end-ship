import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash-es';
import styled from 'styled-components';
import Table from 'src/components/Table';
import DropDown from 'src/components/DropDown';
import { LineBox, VerticalBox, Spin } from '@xinghunm/widgets';
import { FilterItems } from 'src/utils/constants';

const Content = styled(VerticalBox)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  overflow: auto;
  @media (min-width: 768px) {
    height: 100%;
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

const Header = styled(LineBox)`
  padding: 0 15px;
  border-radius: 3px 3px 0 0;
  background: #ffffff;
  overflow: visible;
  flex-wrap: wrap;
`;

const SeparateBar = styled.div`
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 1px;
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
  width: 100%;
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

const FilterItemsWrapper = styled.div`
  flex-grow: 1;
  padding: 10px 0;
  padding: 6px 0;
  & > a {
    float: right;
  }
`;

const TableContainer = styled.div`
  height: calc(100% - 63px);
  background: #fff;
`;

const Tags = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-bottom: 10px;
  background: #fff;
`;

const Tag = styled.span`
  background: #6a94ca;
  color: #fff;
  margin-right: 10px;
  padding: 2px 5px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 3px;
`;

const Fork = styled.span`
  margin-left: 3px;
  :hover {
    cursor: pointer;
  }
`;

const propTypes = {
  columnsData: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  selectedTags: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  questionTypeChange: PropTypes.func.isRequired
};

const QuestionTable = ({
  columnsData,
  questions,
  selectedTags,
  isLoading,
  onChange,
  deleteTag,
  questionTypeChange
}) => (
  <Content>
    <Header>
      <HeaderTitle>
        <strong>练习题</strong>
      </HeaderTitle>
      <SearchBox>
        <Input placeholder="搜索题目" onChange={onChange} />
      </SearchBox>
      <FilterItemsWrapper>
        {map(FilterItems, ({ name, items, multiSelect }) => (
          <DropDown
            key={name}
            name={name}
            items={items}
            multiSelect={multiSelect}
            onClick={questionTypeChange}
          />
        ))}
      </FilterItemsWrapper>
    </Header>
    {selectedTags.length > 0 && (
      <Tags>
        {map(selectedTags, tag => (
          <Tag onClick={deleteTag} key={tag}>
            {tag}
            <Fork className="fa fa-times" data-tag={tag} />
          </Tag>
        ))}
      </Tags>
    )}
    <SeparateBar />
    <TableContainer>
      {isLoading ? (
        <Spin />
      ) : (
        <Table
          columns={columnsData}
          dataSource={questions}
          pagination={{ pageSize: 14 }}
        />
      )}
    </TableContainer>
  </Content>
);

QuestionTable.propTypes = propTypes;

export default QuestionTable;
