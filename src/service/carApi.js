import axios from "axios";

export async function getAllCars(){
    const {data , error} = await axios.get("http://localhost:3000/api/v1/cars")

    if(error) return error

    return data;
}

