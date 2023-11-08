import { Flex, Text } from "@chakra-ui/react";
import Image from 'next/image';
import { chakra } from "@chakra-ui/react"; // Import chakra from Chakra UI

import logo from "../../public/assets/images/logo-employee.svg";

const CustomText = chakra(Text); // Wrap Text component with chakra

const Logo = ({ extraStylesText, extraStylesImg }) => {
  return (
    <Flex cursor="pointer" alignItems="center" flexDir="column">
      <Image src={logo} w={10} alt="logo" {...extraStylesImg} />
      <CustomText
        letterSpacing={1}
        textAlign="center"
        fontFamily="Rubik"
        fontWeight={500}
        _hover={{ textDecoration: "underline" }}
        {...extraStylesText}
      >
        VIDHI
      </CustomText>
    </Flex>
  );
};

export default Logo;
