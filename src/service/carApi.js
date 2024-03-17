import axios from "axios";



export async function getAllCars() {
  const { data, error } = await axios.get("http://localhost:3000/api/v1/cars");

  if (error) return error;

  return data;
}


export async function addCar(values) {
  const { data, error } = await axios.post("http://localhost:3000/api/v1/cars/addCar", values, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  });

  if (error) return error;

  return data;
}

export async function getAllCarCategories(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/cars/getAllCategories");

  if (error) return error;

  return data;
}

export async function getAllBrands(){
  const {data , error} = await axios.get("http://localhost:3000/api/v1/brands");
  if (error) return error;

  return data;
}

export async function deleteCar(id , token){

  const {data ,error} = await axios.delete(`http://localhost:3000/api/v1/cars/${id}`, 
    {
      headers : {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${localStorage.getItem("token")}`, 
      }
    }  
  )
  if (error) return error;

  return data;
}