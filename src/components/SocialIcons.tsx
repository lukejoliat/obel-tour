import { Box, Flex, Image } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import message from "./message.svg";

const Icon = ({ children }: PropsWithChildren) => {
  return (
    <Box bg="teal" borderRadius="100%" m={1} p={1} w={"27px"} h={"27px"}>
      {children}
    </Box>
  );
};

export default () => {
  return (
    <Flex direction={["column", "column", "row"]}>
      <Icon>
        <Image src={message} />
      </Icon>
      <Icon>
        <Image src={message} />
      </Icon>
      <Icon>
        <Image src={message} />
      </Icon>
    </Flex>
  );
};
