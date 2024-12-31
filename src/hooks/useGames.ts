
import { GameQuery } from "../App";
import useQueryData from "./useQueryData";

export interface Platform{
    id: number,
    name: string,
    slug: string
}
export interface Game {
    id: number;
    slug: string;
    name: string;
    rating: number;
    background_image: string;
    platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  


// const useGames=(gameQuery: GameQuery)=>useData<Game>("/games", {params: { genres: gameQuery.genre?.id,
//    platforms:gameQuery.platform?.id,
//    ordering:gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery]); 

const useGames=(gameQuery: GameQuery)=>useQueryData<Game>("/games", {params: { genres: gameQuery.genre?.id,
  platforms:gameQuery.platform?.id,
  ordering:gameQuery.sortOrder, search:gameQuery.searchText}}); 





export default useGames