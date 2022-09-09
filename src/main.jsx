import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import LandingPage from "./pages";
import Fonts from "./theme/fonts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <LandingPage />
    </ChakraProvider>
  </React.StrictMode>
);
