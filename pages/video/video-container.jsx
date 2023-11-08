import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import colors from "../../public/constants/colors/colors";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";

const Videocontainer = () => {
  const videoCardWidth = useBreakpointValue({ base: "100%", md: "33.33%" });

  return (
    <Box className="container" bg={colors.siteBg} mt={23}>
      <Box className="header" px={4} width="100%">
        <HStack
          mt={10}
          spacing={10}
          justifyContent="center"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <VideoCard videoUrl="https://www.youtube.com/watch?v=YnVQv1caqCQ" width={videoCardWidth} />
          <VideoCard videoUrl="https://www.youtube.com/watch?v=yW4D3BcyJUc" width={videoCardWidth} />
          <VideoCard videoUrl="https://www.youtube.com/watch?v=xjalD-NM_zU" width={videoCardWidth} />
        </HStack>
      </Box>
    </Box>
  );
};

export default Videocontainer;
