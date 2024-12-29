import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaReact,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiAtari,
  SiNintendo,
  SiNintendoswitch,
  SiPlaystation,
  SiPlaystation2,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: SiPlaystation,
    playstation2: SiPlaystation2,
    playstation3: SiPlaystation3,
    playstation5: SiPlaystation5,
    playstation4: SiPlaystation4,
    xbox: FaXbox,
    "xbox-series-x": FaXbox,
    "xbox-one": FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendoswitch,
    atari: SiAtari,
    linux: FaLinux,
    mac: FaApple,
    macos: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) =>
        platform == null ? (
          <Icon as={FaReact} asChild={false} color={"gray.500"} />
        ) : (
          <Icon
            as={!iconMap[platform.slug] ? FaReact : iconMap[platform.slug]}
            key={platform.id}
            asChild={false}
            color={"gray.500"}
          />
        )
      )}
    </HStack>
  );
};

export default PlatformIconList;
