//import vidhi from '../public/assets/logo/vidhi.png'
import { useEffect, useState } from 'react';
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import NavBar from './navbar/navbar';
import Footer from "./footer/footer";
import dynamic from 'next/dynamic';
import colors from "../public/constants/colors/colors";
import NavBar2 from './navbar/navbar2';
import Layout from './layout';

function PricingPolicy() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Layout>
        <NavBar2 />
        <Box className='container' bg={colors.siteContentBg} >
          <Box className='header' px={4} width={windowWidth > 600 ? '80%' : '100%'}>
            <Box mb={5}>
              <Heading className='top-heading' fontSize={{ base: 20, md: 30 }}>
                Vidhi Onboarding is simplified!
              </Heading>
              <Heading className='top-sub-heading' mt={4} fontSize={{ base: 16, md: 22 }}>
                We have plans* for all types of businesses**
              </Heading>
            </Box>
            <Flex
              alignItems="center"
              justifyContent="center"
              width='100%'>
              <Flex
                alignItems="center"
                //justifyContent="space-between"
                justifyContent="center"
                gap='40px'
                py={4}
                my={4}
                flexDirection={windowWidth > 600 ? 'row' : 'column'}
                width='100%'
              >

                {/* card1 */}
                <Box className='card'>
                  <Box mx={windowWidth > 600 ? 12 : 8} my={8} pl={6} width={300} height={250}>
                    <Box mt={14} />
                    <Flex alignItems="flex-start" justifyContent="flex-start" gap='16px'>
                      <Text className='heading' fontSize={{ base: 20, md: 26 }}>
                        Basic Plan
                      </Text>
                    </Flex>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      User Limit - 20 Users
                    </Text>
                    <Box mt={10} />
                    <Text fontWeight={600}
                      fontSize={40} textAlign='left' mt={2}>
                      <span className='normal-text'> ₹500 /mo</span>
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={18}
                      lineHeight="140%"
                      color="#667396;"
                      mt={2}
                      textAlign="left"
                    >
                      For 5 Employees + 1 Employer
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={600}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      ₹100 /mo for every additional user
                    </Text>
                  </Box>
                </Box>


                {/* card 2 */}
                <Box className='card'>
                  <Box mx={windowWidth > 600 ? 12 : 8} my={8} pl={6} width={300} height={250}>
                    <Box mt={14} />
                    <Flex alignItems="flex-start" justifyContent="flex-start" gap='16px'>
                      <Text className='heading' fontSize={{ base: 20, md: 26 }}>
                        Premium Plan
                      </Text>
                    </Flex>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      User Limit - 50 Users
                    </Text>
                    <Box mt={12} />
                    <Text fontWeight={600}
                      fontSize={40} textAlign='left' mt={2}>
                      <span className='normal-text'> ₹750 /mo</span>
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={18}
                      lineHeight="140%"
                      color="#667396;"
                      mt={2}
                      textAlign="left"
                    >
                      For 5 Employees + 1 Employer
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={600}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      ₹150 /mo for every additional user
                    </Text>
                  </Box>
                </Box>

                {/* card3 */}

                <Box className='card'>
                  <Box mx={windowWidth > 600 ? 12 : 8} my={8} pl={6} width={300} height={250}>
                    <Box mt={14} />
                    <Flex alignItems="flex-start" justifyContent="flex-start" gap='16px'>
                      <Text className='heading' fontSize={{ base: 20, md: 26 }}>
                        Enterprise Plan
                      </Text>
                    </Flex>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      No user limit
                    </Text>
                    <Box mt={12} />
                    <Text fontWeight={600}
                      fontSize={40} textAlign='left' mt={2}>
                      <span className='normal-text'> ₹1000 /mo </span>
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize={18}
                      lineHeight="140%"
                      color="#667396;"
                      mt={2}
                      textAlign="left"
                    >
                      For 5 Employees + 1 Employer
                    </Text>
                    <Text
                      fontStyle="normal"
                      fontWeight={600}
                      fontSize={16}
                      lineHeight="140%"
                      color="#AAAABC"
                      mt={2}
                      textAlign="left"
                    >
                      ₹100 /mo for every additional user
                    </Text>
                  </Box>
                </Box>



              </Flex>
            </Flex>
            <Box my={3}>
              <Text fontStyle="normal"
                fontWeight={500}
                fontSize={18}
                lineHeight="140%"
                color="#7C8396">
                Note: Discount applicable for all plans based on code. Also, discount codes can be given for extension of plans.
              </Text>
              {/* <Text fontSize={{ base: 20, md: 24 }} className='normal-text'>
              Every plan comes with below features and option to cancel anytime
            </Text>
            <Text className='des' mt={3} fontSize={windowWidth > 600 ? 20 : 16}>
              Access to All Functionalities <br />
              Up to 25 employee accounts <br />
              Unlimited tasks <br />
              Unlimited broadcasts <br />
              And Many More
            </Text> */}
            </Box>
            {/* <Box my={3}>
            <Text fontSize={{ base: 20, md: 24 }} className='normal-text' mb={3}> Try Now at No Cost</Text>
            <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}> Your First Month is on us for Yearly Plan Subscribers</Text>
            <Text className='des' fontSize={windowWidth > 600 ? 20 : 16}> Your First Week is on us for Monthly Plan Subscribers</Text>
            <Text fontSize={{ base: 20, md: 24 }} className='normal-text' my={2}>SUBSCRIBE NOW</Text>
            <Text fontSize={14}> <span className='blue-txt'>(Pay Later, Start Using </span> )</Text>
            <Text className='des' mt={3} fontSize={windowWidth > 600 ? 20 : 16} textAlign='start'>
              * Link to access refund policy
            </Text>
            <Text className='des' mt={3} fontSize={windowWidth > 600 ? 20 : 16} textAlign='start'>
              ** Also available in attractive Custom Plans depending upon type and size of business
            </Text>
          </Box> */}
          </Box>
        </Box>
        <Footer />
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(PricingPolicy), { ssr: false })
