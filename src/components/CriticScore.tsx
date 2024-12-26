import { Badge } from "@chakra-ui/react";

interface CriticScoreProp {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProp) => {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      //   color={"green"}
      //   variant={"solid"}
      //   colorPalette={"teal"}
      //   asChild={false}
      fontSize={"14px"}
      colorPalette={color}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
