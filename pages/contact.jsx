import { Box, Flex, FormControl, FormLabel, Heading, Input, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import colors from "../public/constants/colors/colors";
import PrimaryButton from "./button/primary-button";
import NavBar2 from './navbar/navbar2';
import Footer from "./footer/footer";
import dynamic from "next/dynamic";
import Layout from './layout';

const ContactUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Business Name:", businessName);
    console.log("Mobile Number:", mobileNumber);


    setName("");
    setEmail("");
    setContact("");
    setBusinessName("");
    setMobileNumber("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const bgColor = useBreakpointValue({
    base: colors.darkBlue, // Customize as needed
    md: colors.primaryColor, // Adjust for medium-sized screens
    lg: colors.anotherColor, // Adjust for larger screens
  });


  return (
    <>
      <Layout>
        <Box bg={colors.siteContentBg} pt={1}>
          <NavBar2 />
          <Heading
            textAlign="center"
            w="100%"
            fontStyle="normal"
            fontWeight={600}
            fontSize={34}
            lineHeight="140%"
            color="#454555"
          >
            Contact Us
          </Heading>
          <Flex justifyContent="center" alignItems="center" p={10} >
            <form
              onSubmit={handleSubmit}
              style={{ width: isMobileView ? "100%" : "50%" }}
            >
              <VStack spacing={3}>
                <Flex>
                  <FormControl isRequired>
                    <FormLabel fontSize={20}>Name:</FormLabel>
                    <Box
                      w="592px"
                      h="80px"
                      borderRadius="8px"
                      bg="white"
                      px={4}
                      py={2}
                      display="flex"
                      alignItems="center"
                      marginRight="32px"
                    >
                      <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        bg="transparent"
                        border="none"
                        _focus={{ outline: "none" }}
                        placeholder="Enter Name"
                        color="#AAAABC"
                        fontSize="20px"
                        fontWeight="400"
                      />
                    </Box>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize={20}>Business Name:</FormLabel>
                    <Box
                      w="592px"
                      h="80px"
                      borderRadius="8px"
                      bg="white"
                      px={4}
                      py={2}
                      display="flex"
                      alignItems="center"
                    >
                      <Input
                        type="text"
                        name="businessName"
                        value={businessName}
                        onChange={handleBusinessNameChange}
                        bg="transparent"
                        border="none"
                        _focus={{ outline: "none" }}
                        placeholder="Enter Business Name"
                        color="#AAAABC"
                        fontSize="20px"
                        fontWeight="400"
                      />
                    </Box>
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl isRequired mt={6}>
                    <FormLabel fontSize={20}>Email:</FormLabel>
                    <Box
                      w="592px"
                      h="80px"
                      borderRadius="8px"
                      bg="white"
                      px={4}
                      py={2}
                      display="flex"
                      alignItems="center"
                      marginRight="32px"

                    >
                      <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        bg="transparent"
                        border="none"
                        _focus={{ outline: "none" }}

                        placeholder="Enter Email"
                        color="#AAAABC"
                        fontSize="20px"
                        fontWeight="400"
                      />
                    </Box>
                  </FormControl>
                  <FormControl isRequired mt={6}>
                    <FormLabel fontSize={20}>Mobile Number:</FormLabel>
                    <Box
                      w="592px"
                      h="80px"
                      borderRadius="8px"
                      bg="white"
                      px={4}
                      py={2}
                      display="flex"
                      alignItems="center"
                    >
                      <Input
                        type="tel"
                        name="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        bg="transparent"
                        border="none"
                        _focus={{ outline: "none" }}
                        placeholder="Enter Number"
                        color="#AAAABC"
                        fontSize="20px"
                        fontWeight="400"
                      />
                    </Box>
                  </FormControl>
                </Flex>
                <Flex justifyContent="center" mt="35px">
                  <PrimaryButton
                    title="Submit"
                    type="submit"
                    // bg={bgColor}
                    extraStyles={{ width: "311px", height: "70px", mt: "35px" }}
                  />
                </Flex>


              </VStack>
            </form>
          </Flex>
        </Box>
        <Footer />
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
