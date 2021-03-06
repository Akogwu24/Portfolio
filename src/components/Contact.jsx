import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

import { ReactComponent as IG } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as FB } from "../images/facebook1.svg";
import { ReactComponent as Call } from "../images/call1.svg";

function Contact() {
  return (
    <Flex justify="center" align="center" mt="25px">
      <Box h="2px" w="120%" bg="rgba(219, 211, 215, .1)"></Box>
      <Link href="2348168035893">
        <Call as="a" />
      </Link>

      <Link>
        <IG as="a" />
      </Link>

      <Link href="https://twitter.com/AkogwuEmmanuel8">
        <Twitter as="a" />
      </Link>
      <Link>
        <FB as="a" />
      </Link>
      <Box h="2px" w="120%" bg="rgba(219, 211, 215, .1)"></Box>
    </Flex>
  );
}
export default Contact;
