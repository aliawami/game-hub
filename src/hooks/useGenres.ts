
import genres from "../data/genres";


export interface Genre {
    id: number;
    slug: string;
    name: string;
    games_count: number;
    image_background: string

  }
  

const useGenres=()=> ({data: genres, isLoading: false, error: null})

export default useGenres;  