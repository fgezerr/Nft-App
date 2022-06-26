import React, { useState, useEffect } from "react";
import Card from "./Card";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Data from "../data";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import Sort from "./Sort";

function Products() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterType, setFilterType] = useState("");
  const [list, setList] = useState([]);
  const [sortBy, setSortBy] = useState("priceAsc");
  const [resultsFound, setResultsFound] = useState(true);
  const [curItems, setCurItems] = useState([]);

  const {
    pagesQuantity,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize,
  } = usePaginator({
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

  const applyFilters = () => {
    let updatedList = Data;
    // Sort
    const sortPrice = () =>
      updatedList.sort(function (a, b) {
        return a.price - b.price;
      });
    const sortDate = () =>
      updatedList.sort(function (a, b) {
        return a.date.localeCompare(b.date);
      });
    if (sortBy === "priceAsc") sortPrice();
    if (sortBy === "priceDesc") sortPrice().reverse();
    if (sortBy === "dateAsc") sortDate();
    if (sortBy === "dateDesc") sortDate().reverse();

    // Price Filter
    if (minPrice && minPrice >= 0) {
      updatedList = updatedList.filter((item) => item.price >= minPrice);
    }
    if (maxPrice && maxPrice >= 0) {
      updatedList = updatedList.filter((item) => item.price <= maxPrice);
    }

    // Type Filter
    if (filterType) {
      updatedList = updatedList.filter((item) => item.type === filterType);
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [filterType, sortBy]);

  console.log(sortBy);

  return (
    <div>
      <Box display="flex" gap={5} justifyContent="flex-end">
        <Sort setSortBy={setSortBy} />
        <TypeFilter setFilterType={setFilterType} />

        <PriceFilter
          priceFilter={applyFilters}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {resultsFound ? (
          curItems.map((item) => <Card item={item} />)
        ) : (
          <Text fontSize="2xl">Not Found</Text>
        )}
      </SimpleGrid>

      <Paginator
        isDisabled={isDisabled}
        /* innerLimit={innerLimit} */
        currentPage={currentPage}
        /* outerLimit={outerLimit} */
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
    </div>
  );
}

export default Products;
