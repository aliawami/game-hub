import { Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"subtle"}>
          {selectedPlatform?.name || "Platform"}
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
