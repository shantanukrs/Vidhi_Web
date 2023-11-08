import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import colors from "../../public/constants/colors/colors";
import Logo from "../logo/logo";

const NavBar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 938) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      py={10}
      px={{ base: 10, sm: 58 }}
      w="100%"
      bg={colors.siteContentBg}
    >
      <Link href="/">
        <Logo />
      </Link>
      {isMobileView ? (
        <Menu>
          <MenuButton as={Box}>
            <HiOutlineMenuAlt1 w={8} h={8} />
          </MenuButton>
          <MenuList minW="40%">
            <MenuItem>
              <Link href="/#about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/#features">Feature</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/PricingPolicy">Pricing</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/#newsletter">Newsletter</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">Contact Us</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="40%"
        >
          <Link href="/#about" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              style={{
                fontFamily: "Rubik",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              About Us
            </Box>
          </Link>
          <Link href="/#features" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              style={{
                fontFamily: "Rubik",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Features
            </Box>
          </Link>
          <Link href="/PricingPolicy" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              style={{
                fontFamily: "Rubik",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Pricing
            </Box>
          </Link>
          <Link href="/contact" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              style={{
                fontFamily: "Rubik",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Contact Us
            </Box>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
