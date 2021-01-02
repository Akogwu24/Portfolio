import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";

function Projects() {
  return (
    <Flex justifyContent="start" alignItems="center" w="80%">
      <Box w="100px" h="2px" bg="rgba(219, 211, 215, .5)"></Box>
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
