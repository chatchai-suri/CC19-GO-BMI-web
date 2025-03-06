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

export const actionWeeklyPlan = async (value, token) => {
  try {
    return axios.post("http://localhost:8899/api/user/weeklyPlan", value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
  } catch (error) {
    
  }
}

export const actionUpdateWeeklyPlan = async (value, token) => {

    return axios.patch("http://localhost:8899/api/user/weeklyPlan", value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    

}

export const actionGetWeeklyPlan = async (value, token) => {
  try {
    return axios.patch("http://localhost:8899/api/user/weeklyPlan", value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
  } catch (error) {
    
  }
}

export const actionGetWeeklyPlanById = (token, id) => {
    return axios.get("http://localhost:8899/api/user/weeklyPlanById/"+id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}

export const actionGetChallengeAll = (token) => {
  return axios.get("http://localhost:8899/api/user/challengeAll", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const actionGetChallengeById = async (token, id) => {
  return axios.get("http://localhost:8899/api/user/challengeById/"+id, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}