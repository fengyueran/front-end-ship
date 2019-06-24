import React from 'react';
import PropTypes from 'prop-types';
import { map, forEach } from 'lodash-es';
import styled from 'styled-components';
import Table from 'src/components/Table';
import DropDown from 'src/components/DropDown';
import SearchBox from 'src/components/SearchBox';
import { LineBox, VerticalBox, Spin } from '@xinghunm/widgets';
import { FilterItems, VIEW_SIZE } from 'src/utils/constants';

const Content = styled(VerticalBox)`
  margin-right: auto;
  margin-left: auto;
  @media (hover: none) {
    padding: 0;
  }
  @media (min-width: 768px) {
    height: 100%;
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

const SearchBoxWrapper = styled.div`
  margin-left: 50px;
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
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  @media (hover: none) {
    min-height: calc(
      100vh - ${VIEW_SIZE.NAV_BAR_HEIGHT}px -
        ${VIEW_SIZE.MOBILE_TAB_BAR_HEIGHT}px
    );
  }
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

const SpinWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
`;

const propTypes = {
  columnsData: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  selectedTagsObj: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchBoxRef: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  questionTypeChange: PropTypes.func.isRequired
};

const QuestionTable = ({
  columnsData,
  questions,
  selectedTagsObj,
  isLoading,
  onChange,
  currentPage,
  searchBoxRef,
  deleteTag,
  onPageChange,
  questionTypeChange
}) => {
  let selectedTags = [];
  forEach(selectedTagsObj, tags => {
    selectedTags = selectedTags.concat(tags);
  });

  return (
    <Content>
      <Header>
        <HeaderTitle>
          <strong>练习题</strong>
        </HeaderTitle>
        <SearchBoxWrapper>
          <SearchBox
            placeholder="搜索题目"
            onChange={onChange}
            inputRef={searchBoxRef}
          />
        </SearchBoxWrapper>
        <FilterItemsWrapper>
          {map(FilterItems, ({ name, items, multiSelect }) => (
            <DropDown
              key={name}
              name={name}
              items={items}
              selectedItems={selectedTagsObj[name]}
              multiSelect={multiSelect}
              onClick={questionTypeChange}
            />
          ))}
        </FilterItemsWrapper>
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
      </Header>
      <TableContainer>
        {isLoading ? (
          <SpinWrapper>
            <Spin />
          </SpinWrapper>
        ) : (
          <Table
            columns={columnsData}
            dataSource={questions}
            tableClass="overflow-x: hidden;"
            pagination={{
              pageSize: 14,
              current: selectedTags.length > 0 ? 1 : currentPage
            }}
            onPageChange={onPageChange}
          />
        )}
      </TableContainer>
    </Content>
  );
};

QuestionTable.propTypes = propTypes;

export default QuestionTable;
