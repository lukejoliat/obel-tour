import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <Box position="absolute" top={5} right={5}>
      {children}
    </Box>
  );
};
