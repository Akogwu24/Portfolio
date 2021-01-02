import React from "react";
import { Heading, Link, Flex, HStack } from "@chakra-ui/react";

function Nav() {
  return (
    <Flex justify="space-between" align="center">
      <Heading fontFamily="Pacifico, cursive">Emak</Heading>
      <HStack spacing="40px" fontSize="1.1rem" fontFamily="cursive">
        <Link>Home</Link>
        <Link>About Me</Link>
        <Link>More Projects</Link>
      </HStack>
    </Flex>
  );
}

export default Nav;
