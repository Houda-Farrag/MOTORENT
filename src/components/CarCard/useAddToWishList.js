import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishList as addToWishListApi} from "../../service/userApi";
import toast from "react-hot-toast";

function useAddToWishList(){
    const queryClient = useQueryClient()
    const {mutate : addToWishList , isLoading : addingToWishList} = useMutation({
        mutationFn : addToWishListApi,
        onSuccess : ()=> {
            queryClient.invalidateQueries(["user"])

        },

        onError : ()=> {
            toast.error("Something Wrong")
        }
    })

    return {addToWishList , addingToWishList}
}

export default useAddToWishList;