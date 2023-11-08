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
import playbutton from "../../public/assets/images/image-removebg-preview (13) 1.png";
import Image from "next/image";

const NavBar2 = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
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
      px={{ base: 10, sm: 49 }}
      w="100%"
      bg={colors.siteContentBg}
    >
      <Box marginLeft="126px">
        <Link href="/">
          <Logo />
        </Link>
      </Box>
      {!isMobileView ? (
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
              fontFamily="Rubik"
            >
              About Us
            </Box>
          </Link>

          <Link href="/#features" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              fontFamily="Rubik"
            >
              Features
            </Box>
          </Link>
          <Link href="/PricingPolicy" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              fontFamily="Rubik"
            >
              Pricing
            </Box>
          </Link>
          <Link href="/contact" passHref>
            <Box
              as="a"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              fontFamily="Rubik"
            >
              Contact Us
            </Box>
          </Link>
          <Box
            alignSelf="start"
            w={235}
            h={50}
            borderRadius={125}
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="#0F121A"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.divishaio.vidhi&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              style={{
                color: '#FFFFFF',
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: '16px',
                marginTop: '2px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Get it on
              <Image
                src={playbutton}
                alt="Get it on Google Play"
                style={{ width: '35px', height: '35px', marginTop: '-5px' }}
              />
              Play Store
            </a>
          </Box>
        </Flex>
      ) : (
        <Menu>
          <MenuButton as={Box}>
            <HiOutlineMenuAlt1 w={8} h={8} />
          </MenuButton>
          <MenuList minW="20%">
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
              <Box
                alignSelf="start"
                w={199}
                h={39}
                borderRadius={20}
                display="flex"
                alignItems="center"
                justifyContent="center"
                background="#0F121A"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.divishaio.vidhi&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontSize: '16px',
                    marginTop: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Get it on
                  <Image
                    src={playbutton}
                    alt="Get it on Google Play"
                    style={{ width: '35px', height: '35px', marginTop: '-5px' }}
                  />
                  Play Store
                </a>
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default NavBar2;
