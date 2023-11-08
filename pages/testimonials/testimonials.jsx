import { Box, Divider, Heading, HStack, Text, VStack ,Center} from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import Image from "next/image";

import testimony1 from "../../public/assets/images/DPIIT.png";
import testimony2 from "../../public/assets/images/Startup India.png";
import testimony3 from "../../public/assets/images/Security of Innovation & Development.png";

const Testimonials = () => {
    return (
        <Box>
            <Heading
        fontSize={{ base: 24, md: 34 }}
        fontWeight={600}
        textAlign="center"
        w="90%"
        mx="auto"
        mt={7}
      >
        Supported By
      </Heading>
      <Center>
        <HStack spacing={5} mt={10}>
          <Image src={testimony1} alt="Testimony 1" boxSize={{ base: "60px", md: "80px" }} />
          <Image src={testimony2} alt="Testimony 2" boxSize={{ base: "60px", md: "80px" }} />
          <Image src={testimony3} alt="Testimony 3" boxSize={{ base: "60px", md: "80px" }} />
        </HStack>
      </Center>
      <VStack mx="auto" mt={10} w={{ base: "90%", md: "70%", lg: "50%" }}>
        <Text
          fontFamily="Inter"
          fontSize={{ base: 14, md: 24 }}
          fontWeight={400}
          letterSpacing={0}
          textAlign="center"
          color="#7C8396"
        >
          We are recognized by the Government of India, funded under the Startup India Scheme with the Society for Innovation Development, Indian Institute of Science Bangalore as an incubator.
        </Text>
      </VStack>
      </Box>
   


        );
    };

    export default Testimonials;
