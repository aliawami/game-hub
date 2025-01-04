import { useQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";


const useQueryData=<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[])=>{

    const fetchData = ()=>
        apiClient
                      .get<FetchResponse<T>>(endpoint, { ...requestConfig})
                      .then((res) => res.data.results
                        );
   return useQuery<T[], Error>({
        queryKey:deps ? [endpoint,  [...deps]] : [endpoint],
        queryFn: fetchData,
        staleTime: 10 * 1000,
    });

}

export default useQueryData