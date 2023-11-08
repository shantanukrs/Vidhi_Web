import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  lg: "1200px",
  md: "1000px",
  sm: "900px",
  xs: "700px",
  xxs: "600px",
  xxxs: "300px",
};

const theme = extendTheme({ breakpoints });

export default theme;
