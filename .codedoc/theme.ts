import { createTheme, DefaultCodeThemeLight } from "@codedoc/core/transport";
import { BlulocoDark, BlulocoLight } from "../theme/themes";

export const theme = /*#__PURE__*/ createTheme({
  light: {
    background: "#f0f0ea",
    text: "#383a42",
    primary: "#0099e1",
    primaryContrast: "#f0f0ea",
    border: "#d5d7d8",
    code: "#7a82da",
  },
  dark: {
    background: "#22252a",
    text: "#abb2bf",
    primary: "#2f8eff",
    primaryContrast: "#22252a",
    border: "#3d434f",
    code: "#7a82da",
  },
  code: {
    wmbar: false,
    dark: BlulocoDark,
    light: BlulocoLight,
  },
  quote: {
    light: {
      background: "#0000000a",
      border: "#d5d7d8",
      text: "#383a4290",
    },
    dark: {
      background: "#ffffff09",
      border: "#3d434f",
      text: "#abb2bf90",
    },
  },
  toc: {
    light: {
      background: "#f0f0ea0a",
      border: "#d5d7d8",
    },
    dark: {
      background: "#22252a0a",
      border: "#3d434f",
    },
  },
});
