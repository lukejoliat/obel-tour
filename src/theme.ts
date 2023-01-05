import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    teal: "#04ddb2",
    gray: {
      50: "#f7fafc",
      300: "#767676",
      500: "#333333",
      700: "#333",
      900: "#171923"
    }
  },
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
    mono: "Montserrat"
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "teal",
          borderRadius: "36px",
          color: "white"
        }
      }
    }
  }
});
