import React from "react";
import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import logo from "../components/lober.svg";
import FooterMenu from "./FooterMenu";
import FooterMenuItem from "./FooterMenuItem";
import SocialIcons from "../components/SocialIcons";

export default () => {
  return (
    <footer>
      <FooterMenu>
        <FooterMenuItem>
          <Image fontWeight="bold" h="18px" src={logo} m={["auto", 0]} />
          <Box>A product by Microsoft.</Box>
          <Box>All rights reserved.</Box>
          <Box>© Microsoft 2021</Box>
        </FooterMenuItem>
        <FooterMenuItem>
          <Box>
            <Text fontWeight="bold">About</Text>
          </Box>
          <List>
            <ListItem>Download</ListItem>
            <ListItem>Overview</ListItem>
            <ListItem>Examples</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </FooterMenuItem>
        <FooterMenuItem>
          <Box>
            <Text fontWeight="bold">General</Text>
          </Box>
          <List>
            <ListItem>Download</ListItem>
            <ListItem>Overview</ListItem>
            <ListItem>Examples</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </FooterMenuItem>
        <FooterMenuItem>
          <Box>
            <Text fontWeight="bold">Resources</Text>
          </Box>
          <List>
            <ListItem>Download</ListItem>
            <ListItem>Overview</ListItem>
            <ListItem>Examples</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </FooterMenuItem>
        <FooterMenuItem>
          <SocialIcons />
        </FooterMenuItem>
      </FooterMenu>
    </footer>
  );
};
