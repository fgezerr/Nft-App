import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Data from "../data";
import PriceFilter from "../components/PriceFilter";
import TypeFilter from "../components/TypeFilter";
import SortFilter from "../components/SortFilter";
import Paginate from "../components/Paginate";

function Products() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterType, setFilterType] = useState("");
  const [list, setList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const [curItems, setCurItems] = useState([]);

  //FİLTERİNG

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

  return (
    <div>
      <Box display="flex" gap={5} justifyContent="flex-end">
        <SortFilter setSortBy={setSortBy} />
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

      <Paginate setCurItems={setCurItems} list={list} />
    </div>
  );
}

export default Products;
