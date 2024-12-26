import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      {/* <Text>NavBar</Text> */}
      <Spacer />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
