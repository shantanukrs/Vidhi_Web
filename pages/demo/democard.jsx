import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Democard = ({ text, textColor, link }) => {
  const [windowWidth, setWindowWidth] = useState();
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardWidth = windowWidth > 600 ? "127px" : "80px";
  const cardHeight = windowWidth > 600 ? "48px" : "32px";
  const cardMargin = windowWidth > 600 ? 20 : 8;

  const cardStyles = {
    width: cardWidth,
    height: cardHeight,
    mx: cardMargin,
    marginInlineEnd: 0,
    position: "relative",
    backgroundColor: isHovered ? "#2C2F37" : "transparent",
    transition: "background-color 0.2s",
    cursor: "pointer",
  };

  const textFontSize = windowWidth > 600 ? "16px" : "12px";
  const textStyles = {
    marginTop: windowWidth > 600 ? 13 : 8,
    textAlign: "center",
    color: textColor,
    transition: "color 0.2s",
    cursor: textFontSize,
  };

  if (isHovered) {
    textStyles.color = "white";
  }

  const handleClick = () => {
    window.open(link, "_blank");
  };


  return (
    <Box
      className="card"
      sx={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Box style={{ marginTop: textStyles.marginTop }} textAlign="center">
        <Text as="span" sx={textStyles}>
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Democard;


