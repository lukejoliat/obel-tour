import React, { PropsWithChildren, useState } from "react";
import hamburger from "../components/hamburger.png";
import { Box, List, ListItem, Image, Button } from "@chakra-ui/react";
import NavItem, { ChakraBox } from "./NavItem";
import { AnimatePresence } from "framer-motion";

export const MobileNavItem = ({ children }: PropsWithChildren) => {
  return (
    <NavItem fontSize="20px" padding={["20px", "30px"]}>
      {children}
    </NavItem>
  );
};

export default () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <Image
        cursor="pointer"
        onClick={() => setShowMobile(!showMobile)}
        display={["block", "block", "none"]}
        src={hamburger}
        zIndex={5}
      />
      {showMobile && (
        <AnimatePresence>
          <ChakraBox
            position="absolute"
            bg="transparent"
            left={0}
            right={0}
            top={0}
            pt="80px"
            boxShadow="rgba(0, 0, 0, 0.2) 0px 30px 60px -10px"
            marginInlineStart={"0 !important"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <List
              bg="hsla(0,0%,100%,.97)"
              width="100%"
              marginInlineStart={0}
              m={0}
              p={[0, 6]}
            >
              <ListItem>
                <MobileNavItem>About</MobileNavItem>
              </ListItem>
              <ListItem>
                <MobileNavItem>Work</MobileNavItem>
              </ListItem>
              <ListItem>
                <MobileNavItem>Team</MobileNavItem>
              </ListItem>
              <ListItem>
                <MobileNavItem>Blog</MobileNavItem>
              </ListItem>
              <ListItem>
                <MobileNavItem>Contact</MobileNavItem>
              </ListItem>
              <ListItem>
                <Button variant="primary" w={"100%"} fontSize="20px">
                  Download
                </Button>
              </ListItem>
            </List>
          </ChakraBox>
        </AnimatePresence>
      )}
    </>
  );
};
