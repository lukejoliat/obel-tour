import React, { FC, PropsWithChildren } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

interface NavItemProps extends PropsWithChildren, BoxProps {}

export const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default ({ children, ...props }: NavItemProps) => {
  return (
    <ChakraBox
      fontWeight="bold"
      color="gray.300"
      _hover={{
        color: "gray.700"
      }}
      cursor="pointer"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.25 }
      }}
      {...props}
    >
      {children}
    </ChakraBox>
  );
};
