import { createTheme, DefaultCodeThemeLight } from "@codedoc/core/transport";
import { BlulocoDark, BlulocoLight } from "../theme/themes";

export const theme = /*#__PURE__*/ createTheme({
  light: {
    primary: "#363062",
    border: "#75757548",
  },
  dark: {
    primary: "#9399ff",
    border: "#eeeeee48",
  },
  code: {
    wmbar: false,
    dark: BlulocoDark,
    light: BlulocoLight,
  },
});
