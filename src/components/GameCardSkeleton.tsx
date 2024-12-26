import { Card, CardBody } from "@chakra-ui/react";
import { SkeletonText, Skeleton } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={"10px"} overflow={"hidden"} width="300Px">
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
