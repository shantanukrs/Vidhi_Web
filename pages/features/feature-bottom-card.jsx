import { Heading, Text, VStack } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import Image from 'next/image';

const FeatureBottomCard = ({ src, heading, text }) => {
  
  return (
    <VStack alignItems="start" w={{ base: "100%", sm: "35%" }}>
      <Image
        src={src}
        w={250}
        //height={250}
        alt="feature-img"
        alignself={{ base: "center", sm: "start" }}
      />
      <Heading
        fontSize={{ base: 24, sm: 28 }}
        fontWeight={600}
        textAlign={{ base: "center", sm: "left" }}
        width="100%"
      >
        {heading}
      </Heading>
      <Text
        fontSize={20}
        color={colors.lightGray}
        width={{ base: "100%", sm: "80%" }}
      >
        {text}
      </Text>
    </VStack>
  );
};

export default FeatureBottomCard;
