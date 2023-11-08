import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from 'react';

const Aboutcard = ({ text, img, bgColor, textColor }) => {
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
    <Box
      className='card'
      width={{ base: "100%", lg: windowWidth }}
      height="auto"
      mx={{ base: 4, lg: 8 }}
      style={{ marginInlineEnd: 0 }}
      position="relative"
    >

      <Box
        position="absolute"
        width="80px"
        height="80px"
        bg={bgColor}
        borderRadius={8}
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Image src={img} alt="feature-image" w={80} h={80} />
      </Box>
      <Box
        style={{ marginTop: 120 }}
        textAlign="center"
      >
        <Text
          fontStyle="normal"
          fontWeight={500}
          fontSize={{ base: "16px", md: "20px" }}
          color={textColor}
        >
          {text}
        </Text>
      </Box>


    </Box>

  );
};

export default Aboutcard;


