import axios from "axios";

export async function addReview(values){
    const {error , data } = axios.post("http://localhost:3000/api/v1/reviews/addReview" , values , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error

    return data
}