import { Box } from "@chakra-ui/react";

interface prop {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: prop) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"} width="100%">
      {children}
    </Box>
  );
};

export default GameCardContainer;
