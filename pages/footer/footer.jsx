import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  Tooltip,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiOutlineFacebook,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import colors from "../../public/constants/colors/colors";
import Logo from "../logo/logo";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
const CustomLink = chakra(Link);

const Footer = ({ pdf }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <Box
      px={{ base: 4, sm: 48 }}
      py={{ base: 4, sm: 10 }}
      bg={colors.siteContentBg}
    >
      {windowWidth < 600 && (
        <VStack w="100%" alignItems="flex-start" mb={4}>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#features">Features</Link>
          <Link href="/PricingPolicy">Pricing</Link>
          <Link href="/#newsletter">Newsletter</Link>
          <Tooltip hasArrow label="+91-8951029888">
            <Link>Contact Us</Link>
          </Tooltip>
        </VStack>
      )}
      <Divider mb={4} borderBottom={`1px solid ${colors.lightGray}`} />
      <HStack justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Logo extraStylesImg={{ width: 28 }} extraStylesText={{ fontSize: 15 }} />
        </Link>

        {windowWidth > 600 && (
          <HStack w="70%" justifyContent="space-between">
            <Link href="/" passHref>
              <Box as="a" textDecoration="none" _hover={{ textDecoration: "underline" }} fontFamily="Rubik">
                Home
              </Box>
            </Link>
            <Link href="/#about" passHref>
              <Box as="a" textDecoration="none" _hover={{ textDecoration: "underline" }} fontFamily="Rubik">
                About
              </Box>
            </Link>
            <Link href="/#features" passHref>
              <Box as="a" textDecoration="none" _hover={{ textDecoration: "underline" }} fontFamily="Rubik">
                Features
              </Box>
            </Link>
            <Link href="/PricingPolicy" passHref>
              <Box as="a" textDecoration="none" _hover={{ textDecoration: "underline" }} fontFamily="Rubik">
                Pricing
              </Box>
            </Link>
            <Link href="/contact" passHref>
              <Box as="a" textDecoration="none" _hover={{ textDecoration: "underline" }} fontFamily="Rubik">
                Contact Us
              </Box>
            </Link>
          </HStack>
        )}
        <HStack>
          <Link href="https://www.youtube.com/channel/UCobQupYWcQk1UQL90fgqVIA" target="_blank">
            <Icon as={AiFillYoutube} fontSize={25} cursor="pointer" />
          </Link>
          <Link href="https://twitter.com/vidhi_business" target="_blank">
            <Icon as={AiFillTwitterSquare} fontSize={25} cursor="pointer" />
          </Link>
          <Link href="https://www.instagram.com/Vidhi_Business/" target="_blank">
            <Icon as={AiOutlineInstagram} fontSize={25} cursor="pointer" />
          </Link>
          <Link href="https://www.linkedin.com/company/divisha-innovations/" target="_blank">
            <Icon as={AiFillLinkedin} fontSize={25} cursor="pointer" />
          </Link>
          <Link href="https://www.facebook.com/people/VidhiApp/100089050517791/" target="_blank">
            <Icon as={AiOutlineFacebook} fontSize={25} cursor="pointer" />
          </Link>
        </HStack>
      </HStack>

      <Flex
        color={colors.lightGray}
        alignItems="center"
        justifyContent="center"
        mt={4}
        flexDir="column"
        fontSize={12}
      >
        <CustomLink
          href="/Vidhi_Terms_and_Conditions.pdf"
          target="_blank"
          rel="noreferrer"
          _hover={{ textDecoration: "underline" }}
        >
          Terms and Conditions
        </CustomLink>
        <CustomLink href="/privacy_policy.html" _hover={{ textDecoration: "underline" }}>
          Privacy
        </CustomLink>
        <CustomLink href="/CancellationAndRefundPolicy" _hover={{ textDecoration: "underline" }}>
          Cancellation and Refund Policy
        </CustomLink>
      </Flex>

      <Flex
        color={colors.lightGray}
        alignItems="center"
        justifyContent="center"
        mt={4}
        flexDir="column"
      >
        <Flex alignItems="start">
          <Link href="https://www.google.co.in/maps/place/Divisha+Innovations/@12.9186381,77.6377992,15z/data=!4m5!3m4!1s0x0:0x83932ec1598e12c7!8m2!3d12.9186381!4d77.6377992">
            <Icon as={BiMap} fontSize={15} mr={1} />
          </Link>
          <Text fontSize={12} textAlign="center">
            S3, #104, 13th main, 5th Sector, HSR layout, Bangalore - 560102 Karnataka, India |
          </Text>
        </Flex>
        <Text fontSize={12} textAlign="center" mt={1}>
          Mobile: +91-8951029888
        </Text>
      </Flex>
      <Text color={colors.lightGray} fontSize={12} textAlign="center" mt={2}>
        © 2022 Divisha Innovation Pvt. Ltd. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
