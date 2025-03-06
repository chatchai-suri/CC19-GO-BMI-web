import axios from "axios"
import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"
import { actionSurvey } from "../api/user"


const userStore = (set) => ({
  challengeData: null,
  actionSurvey_: async(value, token) => {
    try {
      console.log("Hi from user-store")
      const res = await actionSurvey(value, token)
      console.log("res=", res.data)

      const {challengeData} = res.data
      set({challengeData: challengeData})
      
      return {success: true, message: "You've get Challenge Data"}
    } catch (error) {
      console.log(error)
      return {success: false, message: "Somthing Wrong!"}
    }
  },setChallengeData: (data) => {
    set({challengeData: data})
  }
})

const useUserStore = create(persist(userStore, {name: "user-store"}))

export default useUserStore