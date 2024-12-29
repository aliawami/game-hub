import { Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
// import { Platform } from "../hooks/useGames";

interface Props {
  selectedSortOrtder: string;
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ selectedSortOrtder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value == selectedSortOrtder
  );
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant={"subtle"}>
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
