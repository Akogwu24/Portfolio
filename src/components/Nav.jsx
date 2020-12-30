import React from "react";
import { Heading, Link, Flex, HStack } from "@chakra-ui/react";

function Nav() {
  return (
    <Flex justify="space-between" align="center" my="20px">
      <Heading>Emak</Heading>
      <HStack spacing="33px" fontSize="1.1rem">
        <Link>Home</Link>
        <Link>About Me</Link>
        <Link>Projects</Link>
        <Link>Journery So Far</Link>
      </HStack>
    </Flex>
  );
}

export default Nav;