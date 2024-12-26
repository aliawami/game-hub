import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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
  
 export interface FetchGamesResponse {
    count: number;
    results: Game[];
    // next: string,
    // previous: string
  }


const useGames=()=>{
    const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
    
      useEffect(() => {
        const controller = new AbortController()
        apiClient
          .get<FetchGamesResponse>("/games", {signal: controller.signal})
          .then((res) => setGames(res.data.results))
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
        });

          return () => controller.abort()
      }, []);



      return {games, error}
}

export default useGames