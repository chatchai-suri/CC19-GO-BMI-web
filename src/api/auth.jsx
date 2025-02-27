import axios from "axios";

export const actionRegister = async (value) => {
  return axios.post("http://localhost:8899/api/auth/register", value)
}

export const actionLogin = async (value) => {
  return axios.post("http://localhost:8899/api/auth/login", value)
}