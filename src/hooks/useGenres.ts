import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";


export interface Genre {
    id: number;
    slug: string;
    name: string;
    games_count: number;
    image_background: string

  }
  
 export interface FetchGenresResponse {
    count: number;
    results: Genre[];
  
  }

const useGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
          const [error, setError] = useState("");
          const [isLoading, setIsLoading] = useState(false)
        
          useEffect(() => {
            const controller = new AbortController()
            setIsLoading(true)
            apiClient
              .get<FetchGenresResponse>("/genres", {signal: controller.signal})
              .then((res) => {setGenres(res.data.results)
                setIsLoading(false)
              })
              .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false)
            });
    
              return () => controller.abort()
          }, []);
    
    
    
          return {genres, error, isLoading}

}

export default useGenres;  