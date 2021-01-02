import React from "react";
import { Box, Image, Flex, VStack } from "@chakra-ui/react";
import Blog from "./Blog";
import Nav from "./Nav";
import Contact from "./Contact";
import Projects from "./Projects";

function Portfolio() {
  return (
    <VStack bg="rgba(0, 0, 0, .8)" spacing="50px">
      <Box
        bg="rgba(0, 0, 0, .9)"
        width="90%"
        mt="30px"
        borderRadius="40px"
        py="50px"
        boxShadow="20px 20px 50px 10px black"
      >
        <Box width="90%" m="auto">
          <Nav />
          <Flex justifyContent="space-between" alignItems="center">
            <Blog />
            <Box>
              <Image
                w="320px"
                objectFit="cover"
                opacity=".5"
                src="https://p.kindpng.com/picc/s/370-3704992_svg-black-and-white-library-computer-programmer-clipart.png"
                alt="programmer"
              />
            </Box>
          </Flex>
          <Contact />
        </Box>
      </Box>
      <Projects />
    </VStack>
  );
}

export default Portfolio;
