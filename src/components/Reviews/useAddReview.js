import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview as addReviewApi } from "../../service/reviewApi";
import toast from "react-hot-toast";

function useAddReview(id){

    const queryClient = useQueryClient()

    const {mutate : addReview , isLoading : creatingReview} = useMutation({
        mutationFn : addReviewApi,
        onSuccess : ()=> {
            queryClient.invalidateQueries(["reviews"])
        },

        onError : ()=> {
            toast.error("Something went wrong")
        }
    })

    return {addReview , creatingReview}
}

export default useAddReview;