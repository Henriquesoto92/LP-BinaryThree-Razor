import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      100: "#ffffff",
    },
    black: {
      100: "#000000",
      200: "#151719",
      300: "#2C2C2C",
      400: "#33363A",
    },
    gray: {
      100: "#9BA9B4",
    },
    purple: {
      100: "#5D5DFF",
    },
  },
  fonts: {
    especial: "ArchitectsDaughter, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "black.200",
        fontFamily: "Roboto, sans-serif",
        color: "white.100",
      },
      input: {
        fontWeight: "700",
        borderRadius: "7px",
        boxShadow: "0px 13px 50px rgba(0, 0, 0, 0.1)",
      },
      option: {
        fontSize: "18px",
        fontWeight: "600",
      },
    },
  },
  headings: {
    fontFamily: "Roboto, sans-serif",
  },
});
