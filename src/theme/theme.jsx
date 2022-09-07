import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: "-0.035em",
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "400",
        margin: 0,
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 700,
        borderRadius: "33px",
      },
      variants: {
        primary: {
          bg: "blue.100",
          color: "white",
        },
        secondary: {
          bg: "yellow.100",
          color: "black.100",
          boxShadow: "0px 13px 50px rgba(0, 0, 0, 0.1)",
        },
        naked: {
          bg: "none",
          border: "1px",
        },
      },
    },
  },
  colors: {
    white: {
      100: "#ffffff",
    },
    black: {
      100: "#000000",
    },
    blue: {
      100: "#1022FF",
      200: "#0B1EDB",
    },
    gray: {
      50: "#B0B0B0",
      100: "#F8F8F8",
      150: "#D5D5D5",
      200: "#F9F9F9",
      250: "#F4F4F4",
      300: "#ABABAB",
      350: "#C4C4C4",
      400: "#707070",
    },
    yellow: {
      100: "#FFE706",
    },
    purple: {
      100: "#8103E5",
    },
  },
  fonts: {
    heading: "Supply, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        fontFamily: "Roboto, sans-serif",
        color: "black.100",
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
});
