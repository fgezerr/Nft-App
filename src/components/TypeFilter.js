import { FaFilter } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";

function TypeFilter({ setFilterType }) {
  return (
    <div>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<Icon as={FaFilter} />}>
            Type
          </MenuButton>
          <MenuList p={5}>
            <Box
              gap={3}
              alignItems="center"
              justifyContent="center"
              display={"flex"}
            >
              <Button onClick={() => setFilterType("")}>All</Button>
              <Button onClick={() => setFilterType("image")}>Image</Button>
              <Button onClick={() => setFilterType("video")}>Video</Button>
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
}

export default TypeFilter;
