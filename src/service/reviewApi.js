import axios from "axios";

export async function addReview(values){
    const {data , error } = axios.post("http://localhost:3000/api/v1/reviews/addReview" , values , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error

    return data
}

export async function getAllCarReviwes(id){
    const {data , error } = await axios.get(`http://localhost:3000/api/v1/reviews/getAllReviewsOnCar/${id}` , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    })

    if (error) return error
    console.log(data)
    return data
}

