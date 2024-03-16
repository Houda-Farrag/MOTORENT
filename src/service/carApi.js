import axios from "axios";


export async function getAllCars() {
  const { data, error } = await axios.get("http://localhost:3000/api/v1/cars");

  if (error) return error;

  return data;
}

// i want to values data in form data
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