import { Box, Divider, Heading, HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import FeatureCard from "./feature-card";
import FeatureBottomCard from "./feature-bottom-card";
import Image from "next/image";

import featureBottomCard1 from "../../public/assets/images/feature-bottom-card-1.png";
import featureBottomCard2 from "../../public/assets/images/feature-bottom-card-2.png";
import featurePng1 from "../../public/assets/images/feature-1.png";
import featurePng2 from "../../public/assets/images/feature-2.png";
import featurePng3 from "../../public/assets/images/feature-3.png";

const Features = () => {
  const isMobileLayout = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={10} id="features">
      <Text
        textAlign="center"
        fontSize={24}
        mb={10}
        fontFamily="Rubik"
        fontWeight={{ base: "bold", md: "normal" }}
        w={{ base: "80%", md: "100%" }}
        mx="auto"
        mt={isMobileLayout ? "15px" : 0}
      >
        Get ready to shift from Firefighting Mode to vidhi mode
      </Text>
      <VStack spacing={isMobileLayout ? 6 : 90} p={4} mt={isMobileLayout ? 6 : 20}>
        <FeatureCard
          num="1"
          heading="Work Management"
          text="Assign any work (ad-hoc, repeat, sales, marketing, delivery etc.) in a language of your choice and start tracking until it finishes. Fetching report (at daily, weekly and monthly intervals) is a click of a button using Vidhi."
          imgsrc={featurePng1}
        />
        <FeatureCard
          num="2"
          heading="Employee Engagement"
          text="Track your employees' daily work routine from marking attendance (at office, in the field, or working remotely) to reviewing the work finished (with daily, weekly, and monthly view). Vidhi further amplifies this information with location data for better insights."
          imgsrc={featurePng2}
        />
        <FeatureCard
          num="3"
          heading="Cash Management"
          text="All-in-one functionality to track day-to-day petty cash and sales transactions with the ability to review the sales and expenditure employee-wise."
          imgsrc={featurePng3}
        />
      </VStack>
      <Divider
        my={10}
        w="20%"
        mx="auto"
        borderBottom={`4px solid ${colors.purpleDarker}`}
      />
      <Heading
        fontSize={isMobileLayout ? "24px" : "34px"}
        fontWeight={600}
        textAlign="center"
        w="90%"
        mx="auto"
      >
        While you are managing businesses, we will run the errands and notify you about...
      </Heading>
      <HStack
        mt={10}
        p={isMobileLayout ? 4 : 10}
        justifyContent={isMobileLayout ? "center" : "space-around"}
        flexDir={isMobileLayout ? "column" : "row"}
      >
        <FeatureBottomCard
          src={featureBottomCard1}
          heading="Business Customer Management"
          text="Unified interface for sharing customer information with employees while assigning work."
        />
        <FeatureBottomCard
          src={featureBottomCard2}
          heading="Documents Management"
          text="All your business-related documents such as invoices, receipts, photos etc. are linked and tagged to a work item to facilitate need-based retrieval at a click of a button using Vidhi."
        />
      </HStack>
    </Box>
  );
};

export default Features;
