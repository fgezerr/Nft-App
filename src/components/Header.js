import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <Box py={5} display={"flex"} justifyContent={"center"}>
        <Text fontSize={25} fontWeight={700}>
          NFT FİLTERİNG APP
        </Text>
      </Box>
    </div>
  );
}

export default Header;
