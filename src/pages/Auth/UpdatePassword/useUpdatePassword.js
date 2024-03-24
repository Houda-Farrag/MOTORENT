import { useMutation } from "@tanstack/react-query";
import { updatePassword as  updatePasswordApi} from "../../../service/userApi"
import toast from "react-hot-toast";


function useUpdatePassword(reset){
    const {mutate : mutatePassword , isLoading : updatingPassword} =  useMutation({
        mutationFn : updatePasswordApi,
        onSuccess : ()=> {
            toast.success("Password is Updated Successfully, Pleae Login Again")
            reset()
        },

        onError : (error) => {
            toast.error(error.response.data.message)
        }
    })

    return { mutatePassword , updatingPassword}
}

export default useUpdatePassword;