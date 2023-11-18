import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";

const AboutAccordion = () => {
  const headingFontSize = useBreakpointValue({ base: 24, sm: 28, md: 32, lg: 38 });

  return (
    <Box py={10} px={10} bg={colors.siteBg} id="about">
      <Heading textAlign="center" w="100%" mb={5} fontSize={headingFontSize}>
        About Us
      </Heading>
      <Accordion allowToggle>
        <AccordionItem textAlign="center" padding="10px" margin="50px">
          {/* <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Divisha.io
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2> */}
          {/* <AccordionPanel pb={4}> */}
            <Text p={2} margin="30px">
              Divisha Innovation Private Limited will primarily focus on product
              design and product development with special focus on problems to
              be solved for developing nations.
            </Text>
            <Text p={2} margin="30px">
              Our Vision is to design and develop customer-centric products to
              achieve their goals innovatively and economically.
            </Text>
            <Text p={2} margin="30px">
              Our Mission is that we are committed to our customer success and
              our approach to delivering this is by empathizing with their needs
              & goals and embracing their experiences.
            </Text>
            <Text p={2} margin="30px">
              Our business strategy is to put the customer first, at the core of
              the business and provide a positive experience while building
              long-term relationships.
            </Text>
          {/* </AccordionPanel> */}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AboutAccordion;