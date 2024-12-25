import { Image, Card, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"10px"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </Card.Body>
      <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
    </Card.Root>
  );
};

export default GameCard;
