import useData from "./useData";



export interface Sort{
    id: number;
    name: string;
}


const useSort=()=> useData<Sort>("/platforms/lists/parents");

export default useSort