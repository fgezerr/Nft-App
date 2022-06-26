import React from "react";
import { FaFilter } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";

function SortFilter({ setSortBy }) {
  return (
    <div>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<Icon as={FaFilter} />}>
            Sort
          </MenuButton>
          <MenuList p={5}>
            <Box
              gap={3}
              alignItems="center"
              justifyContent="center"
              display={"flex"}
            >
              <Button onClick={() => setSortBy("priceAsc")}>Price Asc</Button>
              <Button onClick={() => setSortBy("priceDesc")}>Price Desc</Button>
              <Button onClick={() => setSortBy("dateAsc")}>Date Asc</Button>
              <Button onClick={() => setSortBy("dateDesc")}>Date Desc</Button>
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
}

export default SortFilter;
