import React, { useEffect, useState } from "react";
import { Box, Heading, Flex, HStack } from "@chakra-ui/react";
import Democard from "./democard";
import colors from "../../public/constants/colors/colors";
import { useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Demovideo = () => {
  const [windowWidth, setWindowWidth] = useState();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 600;

  const headingFontSize = useBreakpointValue({ base: "20px", md: "32px", lg: "40px" });

  const slickSettings = {
    infinite: true,
    slidesToShow: isSmallScreen ? 1 : 3, // You can adjust the number of slides per view
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <Box className="container" bg={colors.siteBg} mt={isSmallScreen ? 10 : 30}>
      <Box className="header" px={4} width="100%">
        <Box>
          <Heading
            className="top-heading"
            fontSize={headingFontSize}
            mt={7}
            fontFamily="Rubik"
            fontWeight={400}
            letterSpacing="0.46px"
          >
            Vidhi Business Owner and Staff App Demonstration Videos
          </Heading>
        </Box>
        <Flex alignItems="center" justifyContent="center" width="100%">
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="20px"
            py={2}
            my={3}
            flexDirection={isSmallScreen ? "column" : "row"}
            width="100%"
          >
            <HStack
              mt={isSmallScreen ? 10 : 30}
              spacing={10}
              justifyContent="center"
              flexDir={isSmallScreen ? "column" : "row"}
            >
              <Slider {...slickSettings}>
                <Democard text="English" />
                <Democard text="Hindi" />
                <Democard text="Odia" />
                <Democard
                  text="Tamil"
                  link="https://www.youtube.com/watch?v=xjalD-NM_zU"
                 />
                <Democard text="Bengali" />
                <Democard text="Gujarati" />
                <Democard
                  text="Kannada"
                  link="https://www.youtube.com/watch?v=YnVQv1caqCQ&t=9s"
                />
                <Democard text="Telugu" />
                <Democard text="Nepali" />
              </Slider>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Demovideo;
