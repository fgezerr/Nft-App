import React from "react";
import { Button, Box, Image, Text } from "@chakra-ui/react";

function Card({ item }) {
  return (
    <div>
      <Box
        bg="white"
        boxShadow="2xl"
        borderWidth="1px"
        p="5"
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

        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Text pt="3" fontSize={14} fontWeight="bold">
            {item.price}({item.currency})<Text fontSize="9">{item.date}</Text>
          </Text>
          <Text pt="2" fontSize={18} fontWeight="semibold">
            {item.title}
          </Text>
          <Box mt="4">
            <Button colorScheme="pink">Buy</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Card;
