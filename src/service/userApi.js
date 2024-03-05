import axios from "axios";

export async function signup(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/signup",
    values
  );

  if (error) return error;

  return data;
}
