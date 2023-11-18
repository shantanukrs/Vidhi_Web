import { Button, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";

const PrimaryButton = ({ extraStyles, title, type }) => {

  const bgColor = useBreakpointValue({
    base: colors.darkBlue, // Customize as needed
    md: colors.primaryColor, // Adjust for medium-sized screens
    lg: colors.anotherColor, // Adjust for larger screens
  });

  const textColor = useBreakpointValue({
    base: "white",
    md: "black",
    lg: "blue", // Adjust text color based on your design
  });

  const fontSize = useBreakpointValue({
    base: "16px", // Customize as needed
    md: "20px", // Adjust font size for medium-sized screens
    lg: "24px", // Adjust font size for larger screens
  });

  return (
    <Button
      bg={bgColor}
      color={textColor}
      fontSize={fontSize}
      {...extraStyles}
      type={type || "button"}
      _hover={{ bg: bgColor }}
    >
      {title ? title : "Button"}
    </Button>
  );
};

export default PrimaryButton;
