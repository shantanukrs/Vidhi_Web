import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import VideoContainer from "../video/video-container";
import colors from "../../public/constants/colors/colors";
import CancellationAndRefundPolicy from '../CancellationAndRefundPolicy';
import PricingPolicy from '../PricingPolicy';
import PrivacyPolicy from '../PrivacyPolicy';
import Home1 from "./Home1";
import ContactUs from "../contact";

const Home = ({ pdf }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <>
      <Box bg={colors.siteBg} minH="100vh">
        <NavBar />
        {router.pathname === "/" && <Home1 pdf={pdf} />}
        {router.pathname === "/contact" && <ContactUs />}
        {router.pathname === "/PricingPolicy" && <PricingPolicy />}
        {router.pathname === "/PrivacyPolicy" && <PrivacyPolicy />}
        {router.pathname === "/CancellationAndRefundPolicy" && (
          <CancellationAndRefundPolicy />
        )}
        <Footer pdf={pdf} />
      </Box>
    </>
  );
};

export default Home;
