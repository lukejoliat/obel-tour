import { HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import NavItem from "./NavItem";

// TODO: make this just a theme variant?
export const DesktopNavItem = ({ children }: PropsWithChildren) => {
  return (
    <NavItem fontSize={"18px"} mr={2} ml={2}>
      {children}
    </NavItem>
  );
};

export default () => {
  return (
    <HStack display={["none", "none", "flex"]}>
      <DesktopNavItem>About</DesktopNavItem>
      <DesktopNavItem>Work</DesktopNavItem>
      <DesktopNavItem>Team</DesktopNavItem>
      <DesktopNavItem>Blog</DesktopNavItem>
      <DesktopNavItem>Contact</DesktopNavItem>
    </HStack>
  );
};
