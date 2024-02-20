import { extendTheme } from "@chakra-ui/react";

import { semanticTokens } from "./semantic-tokens";
import { fonts } from "./fonts/Fonts";

export const storageKey = "chakra-ui-color-mode";
let colorModeInLocalStorage;
if (typeof window !== "undefined") {
  colorModeInLocalStorage = localStorage.getItem(storageKey);
}
const useSystemColorMode = !colorModeInLocalStorage;

const config = {
  useSystemColorMode,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
};

const theme = extendTheme({
  config,

  semanticTokens,
  fonts,
});

export default theme;
