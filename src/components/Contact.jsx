import React from "react";
import { Flex } from "@chakra-ui/react";

import { ReactComponent as IG } from "../images/instagram.svg";
import { ReactComponent as Twitter } from "../images/facebook2.svg";

function Contact() {
  return (
    <Flex>
      <IG />
      <Twitter />
    </Flex>
  );
}
export default Contact;
