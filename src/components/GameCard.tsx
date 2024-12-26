import { Image, Card, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"10px"} overflow={'hidden'} width='300px' >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </Card.Body>
      <HStack justifyContent="space-between">
        <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />

        <CriticScore score={game.metacritic} />
      </HStack>
    </Card.Root>
  );
};

export default GameCard;
