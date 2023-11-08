import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import colors from "../../public/constants/colors/colors";
import PrimaryButton from "../button/primary-button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const isMobileView = useBreakpointValue({ base: true, md: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Box bg={colors.siteContentBg} pt={5}>
      <Heading textAlign="center" w="100%" mb={5} fontSize={{ base: 24, md: 28 , lg:32 }}>
        Vidhi Newsletter
      </Heading>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        p={10}
        id="newsletter"
        flexDir={isMobileView ? "column" : "row"}
      >
        <Box fontSize={isMobileView ? 14 : 16}>
          <Text fontWeight="bold" fontSize={22}>
            Subscribe to our newsletter
          </Text>
          <Text>
            Subscribe to our newsletter to get our news & deals delivered to you.
          </Text>
          <Text>Don't worry, we hate to spam and we respect your privacy</Text>
        </Box>
        <form
          onSubmit={handleSubmit}
          action="https://divisha.us14.list-manage.com/subscribe/post?u=91caa03fb6da21963b4523bc2&amp;id=af3780dbff&amp;f_id=00ea9ae0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate divisha-bg"
          target="_blank"
          noValidate
          style={{ width: isMobileView ? "100%" : "20%" }}
        >
          <VStack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="EMAIL" value={email} onChange={handleEmailChange} />
            </FormControl>
            <PrimaryButton title="Submit" type="submit" extraStyles={{ w: "100%" }} />
          </VStack>
        </form>
      </Flex>
    </Box>
  );
};

export default Newsletter;
