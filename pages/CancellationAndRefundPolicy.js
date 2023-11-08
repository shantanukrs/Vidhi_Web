import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import divisha from '../public/assets/logo/divisha.png';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Footer from "./footer/footer";
import colors from '../public/constants/colors/colors';
import NavBar2 from './navbar/navbar2';
import Layout from './layout';

const CancellationAndRefundPolicy = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
      <>
      <Layout>
      <NavBar2/>
    <div className="container" style={{ backgroundColor: colors.siteContentBg }}>
      <Box mb={4} width={windowWidth > 600 ? '75%' : '90%'} bg={colors.siteContentBg}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          my={4}
          mr={4}
        >
          <Box>
            <Text className="top-heading" fontSize={{ base: 20, md: 34 }}>
              Cancellation/ Refund Policy
            </Text>
            <Text className="top-sub-heading" fontSize={{ base: 14, md: 20 }}>
              Last Updated on October 05, 2022
            </Text>
          </Box>
          <Image src={divisha} alt="logo" height={40} width={40} />
        </Flex>

        <Text
          py={3}
          px={2}
          textAlign={windowWidth > 600 ? 'center' : 'start'}
          className="des"
          fontSize={windowWidth > 600 ? 20 : 16}
        >
          Kindly note, customers can Cancel, Pause, Resume, or Change Vidhi
          subscription using the Vidhi mobile application or by reaching out to
          customer support. Subscription notifications on Vidhi are
          communicated automatically as per the current status.
        </Text>
        <Box className="card" px={8} py={4} my={3}>
          <Text className="top-heading" fontSize={{ base: 20, md: 26 }}>
            Cancel a subscription
          </Text>
          <Text className="des" fontSize={windowWidth > 600 ? 20 : 16} mt={2}>
            Uninstalling the app will not cancel your subscription. Click
            "Cancel Subscription" and confirm by selecting "Yes."
          </Text>
        </Box>
        <Box className="card" px={8} py={3} mb={3}>
          <Text className="top-heading" fontSize={{ base: 20, md: 26 }}>
            What happens after you cancel
          </Text>
          <Text className="des" fontSize={windowWidth > 600 ? 20 : 16} mt={3}>
            When you cancel a subscription, you’ll still be able to use your
            subscription for the time you’ve already paid.
            <br />
            For example, if you buy a yearly plan subscription on 10th October
            2022 for INR 2000 and decide to cancel your subscription on 31st
            March 2023:
            <br />
            <ul>
              <li>
                You’ll have access to the subscription until 9th October 2023.
              </li>
              <li>
                You won’t be charged another yearly subscription of INR 2000 on
                the 10th October 2023.
              </li>
            </ul>
          </Text>
        </Box>

        <Box className="card" px={8} py={3} mb={3}>
          <Text className="top-heading" fontSize={{ base: 20, md: 26 }}>
            Pause a subscription
          </Text>
          <Text className="des" fontSize={windowWidth > 600 ? 20 : 16} mt={3}>
            Vidhi will let you pause your subscription. When you pause a
            subscription, your subscription will pause at the end of your
            current billing period. This option can be availed only once.
          </Text>
        </Box>
        <Box className="card" px={8} py={4} mb={3}>
          <Text className="top-heading" fontSize={{ base: 20, md: 26 }}>
            Restart a paused subscription
          </Text>
          <Text className="des" fontSize={windowWidth > 600 ? 20 : 16} mt={2}>
            You can resume your subscription anytime.
          </Text>
        </Box>
      </Box>
    </div>
    <Footer/>
    </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(CancellationAndRefundPolicy), {
  ssr: false,
});
