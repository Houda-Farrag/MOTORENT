import { useMutation } from "@tanstack/react-query";
import { addReview as addReviewApi } from "../../service/reviewApi";
import toast from "react-hot-toast";

function useAddReview(){
    const {mutate : addReview , isLoading : creatingReview} = useMutation({
        mutationFn : addReviewApi,
        onSuccess : (data)=> {
            toast.success("Review Added Succsefully")
            console.log(data)
        },

        onError : ()=> {
            toast.error("Something went wrong")
        }
    })

    return {addReview , creatingReview}
}

export default useAddReview;