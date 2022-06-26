import React, { useState, useEffect } from "react";
import Card from "./Card";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Data from "../data";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

function Products() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterType, setFilterType] = useState();
  const [list, setList] = useState(Data);
  const [sortBy, setSortBy] = useState("dateDesc");
  const [resultsFound, setResultsFound] = useState(true);

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
  }, [filterType]);

  return (
    <div>
      {console.log(list)}
      <Box display="flex" gap={5} justifyContent="flex-end">
        <PriceFilter
          priceFilter={applyFilters}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        {/* <TypeFilter typeFilter={typeFilter} /> */}
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {resultsFound ? (
          list.map((item) => <Card item={item} />)
        ) : (
          <Text fontSize="2xl">Not Found</Text>
        )}
      </SimpleGrid>
    </div>
  );
}

export default Products;
