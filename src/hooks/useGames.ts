
import useData from "./useData";
import { Genre } from "./useGenres";

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
  }
  


const useGames=(selectedGenre: Genre | null)=>useData<Game>("/games", {params: { genres: selectedGenre?.id}}, [selectedGenre?.id]); 

export default useGames