import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // onPageSelected: (pageNumber: number) => void;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from(Array(25).keys());

  if (error) return <Text>{error?.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        gap={6}
        overflow={"hidden"}
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />
          </GameCardContainer>
        ))}
        {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />
          </GameCardContainer>
        ))} */}
      </SimpleGrid>

      {/* <PaginationRoot
        count={data ? data.pageParams : 0}
        pageSize={20}
        siblingCount={10}
        defaultPage={1}
        onPageChange={(pageNumber) => onPageSelected(pageNumber.page)}
      >
        <HStack justifyContent={"space-evenly"}>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot> */}
    </>
  );
};

export default GameGrid;
