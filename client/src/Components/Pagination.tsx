import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Box from './Box';

interface IPagination {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationWrapper = styled(Box)`
  color: #b1b3b3;
  cursor: pointer;
  justify-content: center;

  & > div:last-child {
    padding-left: 10px;
  }

  & > div:first-of-type {
    padding-right: 10px;
  }
`;

const PageNumber = styled(Box)`
  padding: 0 10px;
  padding-bottom: 10px;
  position: relative;
  &.currentPage {
    color: black;
  }

  &.currentPage::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;
    left: 0;
    bottom: 0;
  }
`;

const PrevBtn = styled(Box)`
  &.PrevBtnInctive {
    cursor: not-allowed;
  }
`;

const NextBtn = styled(Box)`
  &.NextBtnInctive {
    cursor: not-allowed;
  }
`;

const Pagination: React.FC<IPagination> = ({
  totalItems,
  pageSize,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumsArr = useMemo(() => {
    const arr: string[] = ['1'];
    for (let i = 1; i < Math.ceil(totalItems / pageSize); i++) {
      arr.push(`${i + 1}`);
    }
    return arr;
  }, [totalItems, pageSize]);

  useEffect(() => {}, [pageNumsArr]);

  const nextPageHandler = () => {
    if (currentPage !== pageNumsArr.length) {
      setCurrentPage(currentPage + 1);
      return;
    }
  };

  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      return;
    }
  };

  const pageNumHandle = (event: any) => {
    console.log(currentPage);
    setCurrentPage(parseInt(event.target.textContent));
  };

  return (
    <PaginationWrapper gap="20px">
      <PrevBtn
        onClick={prevPageHandler}
        className={currentPage === 1 ? 'PrevBtnInctive' : ''}
      >
        Prev
      </PrevBtn>
      {pageNumsArr.map((page, index) => (
        <PageNumber
          onClick={pageNumHandle}
          key={page}
          className={index + 1 === currentPage ? 'currentPage' : ''}
        >
          {page}
        </PageNumber>
      ))}
      <NextBtn
        onClick={nextPageHandler}
        className={currentPage === pageNumsArr.length ? 'NextBtnInctive' : ''}
      >
        Next
      </NextBtn>
    </PaginationWrapper>
  );
};

export default Pagination;
