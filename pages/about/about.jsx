import {  Grid, GridItem,useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import PrimaryButton from "../button/primary-button";
import { Box, Heading, Text, Flex ,HStack} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import Aboutcard from "./aboutCard";
//import vidhi from "../../public/assets/images/vidhi_logo.png";
import Image from "next/image";

import tasklist from "../../public/assets/images/task-list.png";
import chat from "../../public/assets/images/Chat.png";
import cash from "../../public/assets/images/cash.png";
import clocktime from "../../public/assets/images/clock-time.png";
import directory from "../../public/assets/images/Directory.png";
import map from "../../public/assets/images/map.png";


 
  const About = () => {
  const textWidth = useBreakpointValue({ xxxs: "90%", xxs: "70%", sm: "40%" }
  );
  const headingFontSize = useBreakpointValue({ base: "20px", md: "30px" });
  const containerMarginTop = useBreakpointValue({ base: 18, md: 20, lg: 30 });
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "row",
    lg: "row",
  });
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

<Box className='container' bg={colors.siteBg} mt={containerMarginTop}>
  <Box className='header' px={4} width='100%' >
    <Box>
      <Heading className='top-heading' fontSize={headingFontSize} mt={7}>
      One App for all your Business Management Needs
      </Heading>
      
    </Box>
    
        <HStack
        mt={10}
        spacing={10}
        justifyContent="space-around"
        flexDir={flexDirection}>

      <Aboutcard
       img={tasklist}
       textColor="#2E7699"
       text="Employee’s Work management"
       bgColor="#49A3CE33"
       
      />
      <Aboutcard
      img={chat}
      textColor="#2E9099"
      text="Employee’s Communication"
      bgColor="#00C2D333"
      />
      <Aboutcard
      img={cash}
      textColor="#2E9984"
      text="Petty Cashflow Management"
      bgColor="#35DCBB33"

      />
      <Aboutcard
      img={clocktime}
      textColor="#36992E"
      text="Employee’s Attendance"
      bgColor="#99EF9233"

      />
      <Aboutcard
      img={directory}
      textColor="#992E3F"
      text="Business Directory"
      bgColor="#AF757E33"
      />
      <Aboutcard
      img={map}
      textColor="
      #99582E"
       text="Employee’s Tracking"
      bgColor="#B2775133"
      />
      </HStack>
        
      
      <Text
      mt={10}
      color="#7C8396"
      textAlign="center"
      fontFamily="Inter"
      fontSize="24px"
      fontWeight={400}
      letterSpacing="0px">
              Vidhi 'The Process' is one of its kind voice-powered mobile application for business management.
            </Text>
  </Box>
</Box>

  );
};

export default About;
