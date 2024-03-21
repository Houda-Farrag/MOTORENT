import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishList as addToWishListApi} from "../../service/userApi";
import toast from "react-hot-toast";

function useAddToWishList(){
    const queryClient = useQueryClient()
    let res;
    const {mutate : addToWishList , isLoading : addingToWishList} = useMutation({
        mutationFn : addToWishListApi,
        onSuccess : (data)=> {
            queryClient.invalidateQueries(["user"])
            res = data
        },
        onError : ()=> {
            toast.error("Something Wrong")
        }
    })

    return {addToWishList , addingToWishList , res}
}

export default useAddToWishList;