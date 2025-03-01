import axios from "axios";

export const actionUpdateProfile = async (value, token) => {
  console.log("from user.jsx")
  return axios.put("http://localhost:8899/api/user/profile", value, {
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}


export const actionSurvey = async (value, token) => {
  console.log("from user.jsx")
  return axios.post("http://localhost:8899/api/user/challenge", value, {
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}

export const actionWeeklyPlan = async (value) => {
  return axios.post("http://localhost:8899/api/user/weeklyPlan", value, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}