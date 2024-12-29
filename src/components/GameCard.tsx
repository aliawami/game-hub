import { Image, Card, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <HStack justifyContent="space-between" marginBottom={3}>
        {game.platforms && (
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
        )}
        <CriticScore score={game.metacritic} />
      </HStack>

      <Heading fontSize={"2xl"}>{game.name}</Heading>
      <Emoji rating={game.rating_top} />
    </Card.Root>
  );
};

export default GameCard;
