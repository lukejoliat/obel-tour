import { Box, HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const FooterMenuItem = ({ children }: PropsWithChildren) => {
  return <Box textAlign={["center", "inherit"]}>{children}</Box>;
};

const FooterMenuHeader = () => {};

const FooterMenuContent = () => {};

const FooterMenu = ({ children }: PropsWithChildren) => {
  return (
    <HStack
      p={["60px", "80px"]}
      justifyContent="space-between"
      flexDir={["column", "row", "row"]}
    >
      {children}
    </HStack>
  );
};

FooterMenu.Item = FooterMenuItem;
FooterMenu.Header = FooterMenuHeader;
FooterMenu.Content = FooterMenuContent;

export default FooterMenu;
