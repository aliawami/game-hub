
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
  


const useGames=(selectedGenre: Genre | null, selectedPlatform: Platform | null)=>useData<Game>("/games", {params: { genres: selectedGenre?.id, platforms:selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]); 

export default useGames