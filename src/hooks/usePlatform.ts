// import useData from "./useData";
import { Platform } from "./useGames";
import useQueryData from "./useQueryData";




const usePlatform=()=> useQueryData<Platform>("/platforms/lists/parents");

export default usePlatform