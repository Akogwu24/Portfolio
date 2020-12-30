import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";
import MainButton from "./Button";

function Blog() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      align="flex-start"
      minH="500px"
      w="40%"
    >
      <Text fontSize="1.8rem">Hello,</Text>
      <Heading fontSize="2.8rem">Akogwu Emmanuel </Heading>
      <Text fontSize="1.3rem" textAlign="justify">
        I am a Software Developer, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum maiores tempora enim neque ullam?{" "}
      </Text>
      <MainButton />
    </Flex>
  );
}
export default Blog;
