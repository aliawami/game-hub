// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import apiClient from "../services/apiClient";


// interface AddDataContext<T>{
//     dataContext: T[]
// }

// const useAddData=<T>(data: T, endpoint: string)=>{
//     const queryClient =  useQueryClient();
//     const addData = useMutation<T, Error>({
//         mutationFn: () => 
//             apiClient.post<T>(endpoint, data).then(response => response.data)
//         ,
//         onMutate:(newData)=>{
//             const previousData = queryClient.getQueriesData<T[]>([endpoint]) || []
//             queryClient.setQueriesData

//             console.log(newData)
//         },

//         onSuccess:(data, newData)=>{
//             console.log(data, newData)
//             queryClient.invalidateQueries({
//                 queryKey: [endpoint],
//             })
//         },

//         onError:(data, newData, dataContext)=>{
//             if (!dataContext) return;

//         }
//     })

//     return addData
// }


// export default useAddData