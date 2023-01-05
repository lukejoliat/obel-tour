import { HStack, Box, Image, Button } from "@chakra-ui/react";
import logo from "../components/lober.svg";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <HStack p={[30, 50]} justifyContent="space-between">
      <Box>
        <Image height="26px" src={logo} alt="Logo" />
      </Box>
      <Nav />
      <MobileNav />
      <Button display={["none", "none", "block"]} variant="primary">
        Download
      </Button>
    </HStack>
  );
};

export default Header;
