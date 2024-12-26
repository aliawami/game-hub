import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation2: FaPlaystation,
    playstation3: FaPlaystation,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    xbox: FaXbox,
    "xbox-series-x": FaXbox,
    "xbox-one": FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    macos: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          asChild={false}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
