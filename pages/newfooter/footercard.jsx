import { Box, Flex, Heading, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import { useEffect, useState } from 'react';
import Image from "next/image";
import star from "../../public/assets/images/ic_outline-star.png"
import { Grid } from "@chakra-ui/react";

const Footercard = ({ text, bgColor, textColor, text1, text2 }) => {
  const windowWidth = useBreakpointValue({ base: "100%", md: "469px" });

  return (
    <Box
      className='card'
      width={windowWidth}
      height="320px"
      // mx={window.innerWidth > 600 ? 'auto' : 420}
      ml={window.innerWidth > 600 ? 'auto' : 420}
      style={{ marginInlineEnd: 20 }}
      position="relative"
      bg={bgColor}
    >
      <Box
        style={{ marginTop: 30, marginRight: 37 }}
        textAlign="center"
        width="100%"
        height="100px"
      >
        <Text
          fontStyle="normal"
          fontWeight={500}
          fontSize={windowWidth > 600 ? 23 : 18}
          color="#FFFFFF"
        >
          {text}
        </Text>
      </Box>
      {/* Stars */}
      <Flex
        position="absolute"
        bottom="40px"
        right="20px"
        justifyContent="flex-end"
      >
        {Array(5)
          .fill()
          .map((_, index) => (
            <Image
              key={index}
              src={star}
              alt="star"
              width={32}
              height={32}
            />
          ))}
      </Flex>
      <Box
        position="absolute"
        width="448px"
        height="0px"
        left="10px"
        top="225px"
        border="1px solid #FFFFFF"
      ></Box>
      <Box
        style={{ marginLeft: 20 }}
        position="absolute"
        left="10px"
        top="240px"
      >
        <Text
          fontStyle="normal"
          fontWeight={500}
          fontSize={windowWidth > 600 ? 18 : 16}
          color="#FFFFFF"
        >
          {text1}
        </Text>
      </Box>
      <Box
        style={{ marginLeft: 20.5 }}
        position="absolute"
        left="10px"
        top="270px"
      >
        <Text
          fontStyle="normal"
          fontWeight={500}
          fontSize={windowWidth > 600 ? 16 : 14}
          color="#FFFFFF"
        >
          {text2}
        </Text>
      </Box>
    </Box>
  );
};

export default Footercard;
