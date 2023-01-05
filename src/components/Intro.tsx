import React, { PropsWithChildren } from "react";

import { Center, HTMLChakraProps } from "@chakra-ui/react";

interface IntroProps extends PropsWithChildren, HTMLChakraProps<"div"> {}

export default ({ children, ...otherProps }: IntroProps) => {
  return (
    <Center flexDirection="column" {...otherProps}>
      {children}
    </Center>
  );
};
