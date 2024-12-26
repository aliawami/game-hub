import { HStack, Image, List, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner size={"lg"} />;
  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontSize={"lg"}
              variant={"plain"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}{" "}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
