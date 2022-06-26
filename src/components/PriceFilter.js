import React from "react";
import { FaFilter } from "react-icons/fa";
import {
  Menu,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  MenuButton,
  MenuList,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";

function PriceFilter({
  maxPrice,
  minPrice,
  priceFilter,
  setMinPrice,
  setMaxPrice,
}) {
  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    priceFilter();
  };
  return (
    <Box align="end" mb={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={FaFilter} />}>
          Price
        </MenuButton>
        <MenuList p={5}>
          <Box gap={3} alignItems="center" display={"flex"}>
            Min
            <NumberInput
              onChange={(e) => setMinPrice(e)}
              maxW={24}
              min={0}
              value={minPrice}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            Max
            <NumberInput
              onChange={(e) => setMaxPrice(e)}
              maxW={24}
              min={0}
              value={maxPrice}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button colorScheme={"blue"} onClick={priceFilter}>
              Apply
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PriceFilter;
