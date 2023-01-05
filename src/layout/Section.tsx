import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <Box margin="auto" maxWidth={"1272px"} p={4}>
      {children}
    </Box>
  );
};
