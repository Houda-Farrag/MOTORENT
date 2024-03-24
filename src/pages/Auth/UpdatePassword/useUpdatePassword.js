import { useMutation } from "@tanstack/react-query";
import { logout, updatePassword as  updatePasswordApi} from "../../../service/userApi"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function useUpdatePassword(reset){
    
    const navigate = useNavigate()
    const {mutate : mutatePassword , isLoading : updatingPassword} =  useMutation({
        mutationFn : updatePasswordApi,
        onSuccess : ()=> {
            toast.success("Password is Updated Successfully, Pleae Login Again")
            reset()
            navigate("/login")
        },

        onError : (error) => {
            toast.error(error.response.data.message)
        }
    })

    return { mutatePassword , updatingPassword}
}

export default useUpdatePassword;