import React from "react";
import { Box, Stack, Image, Flex } from "@chakra-ui/react";
import Blog from "./Blog";
import Nav from "./Nav";
import Contact from "./Contact";

function Portfolio() {
  return (
    <Stack h="100vh" bg="rgba(0, 0, 0, .7)">
      <Box
        bg="rgba(0, 0, 0, .9)"
        h="90vh"
        width="90%"
        m="auto"
        borderRadius="40px"
        boxShadow="20px 20px 50px 10px black"
      >
        <Box width="90%" m="auto">
          <Nav />
          <Flex justifyContent="space-between" alignItems="center">
            <Blog />
            <Box>
              <Image
                w="425px"
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
    </Stack>
  );
}

export default Portfolio;
