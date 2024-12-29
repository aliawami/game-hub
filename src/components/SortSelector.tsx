import { Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
// import { Platform } from "../hooks/useGames";

// interface Props {
//   selectedPlatform: Platform | null;
//   onSelectPlatform: (platform: Platform) => void;
// }

const SortSelector = () => {
  //   const { data, error } = usePlatform();
//   if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant={"subtle"}>
          Order by: Relevance
          {/* Order by: {selectedPlatform?.name || "Relevance"} */}
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date added">Date added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Release Date">Release Date</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average rating">Average rating</MenuItem>
        {/* {data.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))} */}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
