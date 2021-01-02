import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";
import MainButton from "./Button";

function Blog() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      align="flex-start"
      maxWidth="400px"
      fontFamily="cursive"
      py="70px"
    >
      <Text fontSize="2em" fontFamily="Dancing Script, cursive">
        Hello,
      </Text>
      <Heading fontSize="2.5rem" fontFamily="cursive" m="5px 0 20px 0">
        Akogwu Emmanuel
      </Heading>
      <Text fontSize="1.15rem" letterSpacing="0.4px" textAlign="justify">
        I am a Software Developer, Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nam laudantium voluptates, sit vitae, cumque porro
        eligendi magni dolor modi ducimus delectus maxime est deleniti itaque
        neque numquam fugit sunt. Perferendis.
      </Text>
      <MainButton />
    </Flex>
  );
}
export default Blog;
