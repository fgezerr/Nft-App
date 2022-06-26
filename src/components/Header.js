import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <Box py={5} display={"flex"} justifyContent={"center"}>
        <Text fontSize={35} fontWeight={650}>
          NFT Filtering App
        </Text>
      </Box>
    </div>
  );
}

export default Header;
