import React from "react";
import { Button, Box, Image, Text } from "@chakra-ui/react";

function Card({ item }) {
  return (
    <div>
      <Box
        mb={18}
        bg="white"
        boxShadow="2xl"
        borderWidth="1px"
        p="5"
        pb="2"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          borderRadius="lg"
          width={"100%"}
          height={300}
          mb={10}
          src={item.image}
          alt="product"
          loading="lazy"
        />

        <Box display={"flex"} justifyContent="space-between">
          <Text fontSize={23} fontWeight="bold">
            ${item.date}
          </Text>
          <Button colorScheme="pink">Buy</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Card;
