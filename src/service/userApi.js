import axios from "axios";

export async function signup(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/signup",
    values
  );

  if (error) return error;

  return data;
}

export async function login(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/login",
    values
  );

  if (error) return error;
  return data;
}

export async function forgetPassword(values) {
  const { error, data } = await axios.post(
    "http://localhost:3000/api/v1/users/forgotPassword",
    values
  );

  if (error) return error;
  return data;
}
