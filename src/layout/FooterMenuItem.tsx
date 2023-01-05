import { Box } from "@chakra-ui/react";

import React, { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return <Box textAlign={["center", "inherit"]}>{children}</Box>;
};
