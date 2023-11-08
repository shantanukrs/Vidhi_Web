import { Box, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import HeaderBanner from "./header-banner";

const Header = () => {
  const headingFontSize = useBreakpointValue({
    base: "24px", // xxxs
    sm: "28px", // xxs
    md: "34px", // xs
  });

  const textFontSize = useBreakpointValue({
    base: "18px", // xxxs
    sm: "20px", // xxs
    md: "24px", // xs
  });

  return (
    <Box mt={{ base: 10, sm: 20, md: 30, lg: 40 }}
      id="home">
      <HeaderBanner />
    </Box>
  );
};

export default Header;
