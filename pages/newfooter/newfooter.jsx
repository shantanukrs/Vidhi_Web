import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import PrimaryButton from "../button/primary-button";
import { Box, Heading, Text, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import Footercard from "./footercard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Newfooter = () => {
  const textWidth = useBreakpointValue({ xxxs: "90%", xxs: "70%", sm: "40%" }
  );
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
    <Box className='container' bg={colors.siteBg} mt={20}>
      <Box className='header' px={4} width={windowWidth > 600 ? '80%' : '100%'}>
        <Box>
          <Heading className='top-heading' fontSize={{ base: 20, md: 30 }} mt={7}>
            What our Customer love about Vidhi
          </Heading>
        </Box>

        <Flex alignItems="center" justifyContent="center" width="100%" >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
            py={1}
            my={4}
            flexDirection={windowWidth > 600 ? 'row' : 'column'}
            width="100%"
          >
            <HStack
              mt={10}
              spacing={10}
              justifyContent="space-between"
              flexDir={{ base: "column", md: "row" }}>

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
      </Box>
    </Box>

  );
};

export default Newfooter;