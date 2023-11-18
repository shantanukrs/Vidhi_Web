// Inside NavBar2 component

import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

const NavBar2 = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#1A202C"
      color="white"
    >
      {/* Your logo or site name goes here */}
      <Link href="/" passHref>
        <a>
          <Text fontSize="lg" fontWeight="bold">
            YourLogo
          </Text>
        </a>
      </Link>

      {/* Mobile hamburger menu */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        onClick={() => console.log('Mobile Menu Clicked')}
        cursor="pointer"
      >
        {/* You can customize the icon or text for the mobile menu if needed */}
        {/* <svg
          fill="#ffffff"
          width="24px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
        </svg> */}
        <Text fontSize="xl" ml={2}>
          Menu
        </Text>
      </Flex>

      {/* Navbar links */}
      <Flex
        align="center"
        justify={{ base: 'center', md: 'flex-end' }}
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        flexGrow={{ base: 1, md: 0 }}
      >
        <Link href="/" passHref>
          <a>
            <Text fontSize="md" mr={4}>
              Home
            </Text>
          </a>
        </Link>
        {/* Add more links as needed */}
      </Flex>
    </Flex>
  );
};

export default NavBar2;
