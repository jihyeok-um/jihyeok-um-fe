import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import styled from "styled-components";

const Pagination = ({
  maxPage,
  currentPage,
  wrappedPages,
  handleClickNextWrappedPageButton,
  handleClickPrevWrappedPageButton,
  handleClickProduct,
}: PaginationProps) => {
  const isWrappedPageFirst = wrappedPages[0] === 1;
  const isWrappedPageLast = wrappedPages[wrappedPages.length - 1] + 1 > maxPage;

  return (
    <S.Container>
      <S.Button
        disabled={isWrappedPageFirst}
        onClick={handleClickPrevWrappedPageButton}
      >
        <VscChevronLeft />
      </S.Button>
      <S.PageWrapper>
        {wrappedPages.map((page) => (
          <S.Page
            key={page}
            selected={page === currentPage}
            disabled={page === currentPage}
            onClick={handleClickProduct(page)}
          >
            {page}
          </S.Page>
        ))}
      </S.PageWrapper>
      <S.Button
        disabled={isWrappedPageLast}
        onClick={handleClickNextWrappedPageButton}
      >
        <VscChevronRight />
      </S.Button>
    </S.Container>
  );
};

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  wrappedPages: number[];
  handleClickNextWrappedPageButton: () => void;
  handleClickPrevWrappedPageButton: () => void;
  handleClickProduct: (page: number) => () => void;
}

const S = {
  Container: styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin-top: 40px;
    margin-left: -20px;
  `,

  Button: styled.button`
    &:disabled {
      color: #e2e2ea;
      cursor: default;
    }
  `,

  PageWrapper: styled.div`
    display: flex;
    margin: 0 16px;
  `,

  Page: styled.button<{ selected: boolean }>`
    padding: 4px 6px;
    background-color: ${({ selected }) => (selected ? "#000" : "transparent")};
    color: ${({ selected }) => (selected ? "#fff" : "#000")};
    font-size: 20px;

    & + & {
      margin-left: 4px;
    }

    &:disabled {
      cursor: default;
    }
  `,
};

export default Pagination;
