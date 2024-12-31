import {useInfiniteQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";


const useInfintQueryData=<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[])=>{

    const fetchData = ({pageParam = 1})=>
        apiClient
                      .get<FetchResponse<T>>(endpoint, { params: {...requestConfig, page: (pageParam)}})
                      .then((res) => res.data
                        );
   return useInfiniteQuery({
        queryKey:deps ? [endpoint,  [...deps]] : [endpoint],
        queryFn: fetchData,
        initialPageParam: 1,
        getNextPageParam : (lastPage) => lastPage.count,
    });

}

export default useInfintQueryData