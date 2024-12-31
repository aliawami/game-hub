import { useQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";


const useQueryData=<T>(endpoint: string, requestConfig?: AxiosRequestConfig,)=>{

    const fetchData = <T>()=>
        apiClient
                      .get<FetchResponse<T>>(endpoint, { ...requestConfig})
                      .then((res) => res.data.results
                        );

   const {data, isLoading, error} = useQuery<T[], Error>({
        queryKey:[endpoint],
        queryFn: fetchData
        
    });

    return {data, isLoading, error}


    

}

export default useQueryData