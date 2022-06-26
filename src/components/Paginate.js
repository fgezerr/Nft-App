import React, { useEffect } from "react";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";

function Paginate({ setCurItems, list }) {
  const { pagesQuantity, currentPage, setCurrentPage, isDisabled, pageSize } =
    usePaginator({
      total: list.length,
      initialState: {
        pageSize: 3,
        isDisabled: false,
        currentPage: 0,
      },
    });

  useEffect(() => {
    const offset = currentPage * pageSize;
    const getList = (currentPage, pageSize) => {
      setCurItems(list.slice(offset, offset + pageSize));
    };

    getList(currentPage, pageSize);
  }, [currentPage, pageSize, list]);

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
  };
  return (
    <div>
      <Paginator
        isDisabled={isDisabled}
        currentPage={currentPage}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>Previous</Previous>
          <PageGroup isInline align="center" />
          <Next>Next</Next>
        </Container>
      </Paginator>
    </div>
  );
}

export default Paginate;
