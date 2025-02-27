import axios from "axios"
import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"
import { actionSurvey } from "../api/user"


const userStore = (set) => ({
  challengeData: [],
  actionSurvey_: async(value, token) => {
    try {
      console.log("Hi")
      const res = await actionSurvey(value, token)
      console.log("res=", res.data.challengeData)

      const {challengeData} = res.data
      set({challengeData: challengeData})
      
      return {success: true, message: "You've get Challenge Data"}
    } catch (error) {
      console.log(error)
      return {success: false, message: "Somthing Wrong!"}
    }
  }
})

const useUserStore = create(persist(userStore, {name: "user-store"}))

export default useUserStore