import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  //   searchInput: string;
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current)
          // console.log(ref.current.value);
          onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"100%"} startElement={<BsSearch />}>
        <Input
          placeholder="Search games..."
          borderRadius={20}
          variant={"subtle"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
