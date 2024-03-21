import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishList as removeFromWishListApi } from "../../service/userApi";
import toast from "react-hot-toast";

function useRemoveFromWishList(){
    const queryClient = useQueryClient()
    const {mutate : removeFromWishList, isLoading : removingFromWishList } = useMutation({
        mutationFn : removeFromWishListApi,
        onSuccess : ()=> {
            queryClient.invalidateQueries(["user"])
        },

        onError : ()=> {
            toast.error("Something wrong")
        }
    })

    return { removeFromWishList , removingFromWishList}
}

export default useRemoveFromWishList;