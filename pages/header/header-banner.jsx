import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import headerBannerImg from "../../public/assets/images/v_mockup.png";
import colors from "../../public/constants/colors/colors";
import playbutton from "../../public/assets/images/image-removebg-preview (13) 1.png";
import landingimg from "../../public/assets/images/Landing Page Image.png";



const HeaderBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);

    setIsModalOpen(false);
  };

  return (
    <Flex
      alignItems="center"
      p={1}
      px={{ base: 2, sm: 8, md: 12, lg: 20 }}
      mt={-10}
      spacing={0}
      justifyContent="center"
      flexDir={{ base: "column", lg: "row" }}
    >
      <VStack
        //rounded="xl"
        p={{ base: 5, sm: 7, md: 10, lg: 20 }}
        spacing={{ base: 4, sm: 8, md: 12, lg: 20 }}
        w={{ base: "90%", sm: "60%", md: "50%" }}
        h="auto" // Remove fixed height
        margin="50px -85px 0px"
        order={{ base: 1, lg: 0 }}
      >
        {<Box color={colors.darkGray} w="100%" textAlign="left">
          <Heading fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "34px" }}>
            Business Efficiency
          </Heading>
          <Heading fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "34px" }}>
            Management Solution
          </Heading>
        </Box>}
        <Box color={colors.darkGray} w="100%" textAlign="left">
          <Heading
            fontStyle="normal"
            fontWeight={700}
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            textTransform="capitalize"
            color="#262E41"
          >
            Business Efficiency
          </Heading>
          <Heading

            fontStyle="normal"
            fontWeight={700}
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            textTransform="capitalize"
            color="#262E41"
          >
            Management Solution
          </Heading>
        </Box>

        {/* <Text
          color={colors.lightGray}
          fontSize="25px"
          //w="70%"
          alignSelf="start"
          lineHeight="1.3"
          top="-25px"
        >
          Revolutionize the way you manage your <br />

           business operation & Employees <br />
           in your own Language
        </Text> */}

        <div style={{ marginTop: "30px" }}>
          <Text
            color={colors.lightGray}
            fontSize={{ base: "20px", md: "25px", lg: "32px" }}
            alignSelf="start"
            lineHeight="1.3"
            marginLeft={{ base: 0, md: "-360px" }}
          >
            Revolutionize the way you manage your <br />
            business operation & Employees <br />
            in your own Language
          </Text>
        </div>
        <Flex w="100%">
          <Box
            alignSelf="start"
            w={{ base: "170px", md: "230px", lg: "300px" }}
            h="50px"
            borderRadius="120"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="#0F121A"
          >
            <a href="https://play.google.com/store/apps/details?id=com.divishaio.vidhi&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "16px",
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Get it on{" "}
                <Image
                  src={playbutton}
                  alt="Get it on Google Play"
                  style={{ width: "35px", height: "35px", marginTop: "-5px" }}
                />
                Play Store
              </span>
            </a>
          </Box>

          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            width={{ base: "170px", md: "230px", lg: "300px" }}
            borderRadius={120}
            height={50}
            ml={{ base: 0, md: 5 }}
          >
            Join Newsletter
          </Button>
        </Flex>
      </VStack>
      <Image
        src={landingimg}
        alt="landing-img"
        h={{ base: "auto", md: "458px", lg: "600px" }}
        w={{ base: "100%", md: "266px", lg: "360px" }}
        borderRadius="xl"
        position="relative"
        order={{ base: 0, lg: 1 }}
        margin="40px 0px 0px"
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent
          width={{ base: "90%", md: "80%", lg: "500px" }}
          // Adjust height, left, and top based on breakpoints and design
          height="auto"
          left={{ base: "5%", md: "10%", lg: "calc(50% - 250px)" }}
          top={{ base: "5%", md: "10%", lg: "calc(50% - 215px)" }}
          background="#FFFFFF"
          borderRadius="16px"
        >
          <ModalHeader marginTop="29px" fontStyle="normal" fontWeight={600} fontSize="22px" lineHeight="140%" textAlign="center" mb="-18px">
            Subscribe to our newsletter
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody marginTop="19px">
            <Text color="#7C8396" fontStyle="normal" fontWeight={500} fontSize="16px" lineHeight="150%" textAlign="center" mb="20px">
              Subscribe to our newsletter to get our news & deals delivered to you. Don't worry, we hate spam and respect your privacy.
            </Text>
            <form onSubmit={handleSubmit}>
              <VStack spacing="20px">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                    width="100%"
                    height="72px"
                    borderRadius="8px"
                  />
                </FormControl>
                <ModalFooter justifyContent="center">
                  <Button
                    type="submit"
                    width="100%"
                    height="62px"
                    background="#31468E"
                    borderRadius="6px"
                    color="#FFFFFF"
                    fontStyle="normal"
                    fontWeight={600}
                    fontSize="20px"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default HeaderBanner;
