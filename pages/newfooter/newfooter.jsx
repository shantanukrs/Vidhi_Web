import {
  Box,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import { useEffect, useState } from "react";
import Footercard from "./footercard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Newfooter = () => {
  const textWidth = useBreakpointValue({ xxxs: "90%", xxs: "70%", sm: "40%" });
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      bg={colors.siteBg}
      mt={20}
      p={4}
      mr={50}
    >
      <Box width={["100%", "100%", "70%"]} textAlign="center">
        <Heading fontSize={{ base: 20, md: 30 }} mt={6} mb={8}>
          What our Customers love about Vidhi
        </Heading>
      </Box>

      <Flex
        // alignItems="center"
        // justifyContent="center"
        flexDirection={["column", "column", "row"]}
        width={["100%", "100%", "70%"]}
        // mx="auto"
        ml={-350}
      >
        <HStack
          mt={[10, 10, 1]}
          spacing={4}
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <Footercard
            text="Managing cash flow was always a challenge for our business, but Vidhi has made it so much easier. The cash flow management tools are intuitive and insightful, giving us better control over our finances."
            bgColor="#00C2D3"
            text1="Priya Kumarii"
            text2="Delhi"
          />
          <Footercard
            text="Vidhi has truly transformed the way we manage our business. The work assignment feature has made task delegation a breeze, and the attendance tracking has helped us streamline our workforce management."
            bgColor="#49A3CE"
            text1="Ramalingam . K"
            text2="TamilNadu"
          />
          <Footercard
            text="I can't imagine running my business without Vidhi's reminders and notifications."
            bgColor="#35DCBB"
            text1="Anand Bora"
            text2="Kolkata"
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Newfooter;
