import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";

function Projects() {
  return (
    <Flex justifyContent="flex-start" alignItems="center" pt="50px">
      <Box w="100px" h="2px" bg="rgba(219, 211, 215, .1)" ml="120px"></Box>
      <Heading
        fontSize="3rem"
        textAlign="center"
        fontFamily="cursive"
        ml="10px"
      >
        Projects
      </Heading>
    </Flex>
  );
}

export default Projects;
