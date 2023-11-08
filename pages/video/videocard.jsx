import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import { chakra } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import ytimg from "../../public/assets/images/Rectangle 2408.png";
import playbutton from "../../public/assets/images/Play circle filled.png";
import { useBreakpointValue } from "@chakra-ui/react";

const Videocard = ({ text, bgColor, textColor, text1, text2, videoUrl }) => {
  const imageWidth = useBreakpointValue({ base: 379, sm: 404 });

  const handleImageClick = () => {
    window.location.href = videoUrl;
  };

  return (
    <Flex justifyContent="center" position="relative">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        cursor="pointer"
      >
        <a href={videoUrl} onClick={handleImageClick} rel="noopener noreferrer">
          <Image
            src={playbutton}
            alt="Play Button"
            width={50}
            height={50}
          />
        </a>
      </Box>
      <a href={videoUrl} onClick={handleImageClick} rel="noopener noreferrer">
        <Image
          src={ytimg}
          alt="YouTube Image"
          width={imageWidth}
          height={200}
          objectFit="cover"
        />
      </a>
    </Flex>
  );
};

export default Videocard;
