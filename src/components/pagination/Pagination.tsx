import { useRouter } from "next/router";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  maxPage,
  currentWrappedPages,
}: PaginationProps) => {
  const router = useRouter();

  return (
    <Container>
      <Button
        disabled={currentWrappedPages[0] === 1}
        onClick={() =>
          router.push(`${router.basePath}?page=${currentWrappedPages[0] - 1}`)
        }
      >
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {currentWrappedPages.map((page) => (
          <Page
            key={page}
            onClick={() => router.push(`${router.basePath}?page=${page}`)}
            selected={page === currentPage}
            disabled={page === currentPage}
          >
            {page}
          </Page>
        ))}
      </PageWrapper>
      <Button
        disabled={
          currentWrappedPages[currentWrappedPages.length - 1] + 1 > maxPage
        }
        onClick={() =>
          router.push(`${router.basePath}?page=${currentWrappedPages[4] + 1}`)
        }
      >
        <VscChevronRight />
      </Button>
    </Container>
  );
};

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  currentWrappedPages: number[];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

const Page = styled.button<{ selected: boolean }>`
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
`;

export default Pagination;
