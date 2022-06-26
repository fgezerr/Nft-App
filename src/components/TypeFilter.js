import { FaFilter } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";

function TypeFilter({ typeFilter }) {
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
              <Button onClick={typeFilter}>Image</Button>
              <Button onClick={typeFilter}>Video</Button>
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </div>
  );
}

export default TypeFilter;
