import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";

const AboutAccordion = () => {

  const headingFontSize = useBreakpointValue({
    base: "24px", // xxxs
    sm: "28px", // xxs
    md: "34px", // xs
  });

  const textFontSize = useBreakpointValue({
    base: "18px", // xxxs
    sm: "20px", // xxs
    md: "24px", // xs
  });

  const paddingX = useBreakpointValue({
    base: 10,
    sm: 48,
  });

  return (
    <Box py={{ base: 10, sm: 20, md: 30, lg: 40 }}
      px={paddingX}
      bg={colors.siteBg} id="about">
      <Heading
        textAlign="center"
        w="100%"
        mb={5}
        fontSize={{ base: 24, sm: 28, md: 32, lg: 36 }}
      >
        About Us
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Divisha.io
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text p={2} fontSize={textFontSize}>
              Divisha Innovation Private Limited will primarily focus on product
              design and product development with special focus on problems to
              be solved for developing nations.
            </Text>
            <Text p={2} fontSize={textFontSize}>
              Our Vision is to design and develop customer-centric products to
              achieve their goals innovatively and economically.
            </Text>
            <Text p={2} fontSize={textFontSize}>
              Our Mission is that we are committed to our customer success and
              our approach to delivering this is by empathizing with their needs
              & goals and embracing their experiences.
            </Text>
            <Text p={2} fontSize={textFontSize}>
              Our business strategy is to put the customer first, at the core of
              the business and provide positive experience while building
              long-term relationships.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AboutAccordion;
