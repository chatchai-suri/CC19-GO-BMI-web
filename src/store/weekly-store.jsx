import axios from "axios"
import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"
import { actionGetWeeklyPlan, actionSurvey, actionWeeklyPlan } from "../api/user"


const weeklyStore = (set) => ({
  weeklyPlanData: [],
  actionWeeklyPlan_: async(value, token) => {
    try {
      console.log("Hi from weekly-store")
      const res = await actionWeeklyPlan(value, token)
      console.log("res=", res.data)

      const {weeklyPlanData, updateChallenge} = res.data
      set({weeklyPlanData: weeklyPlanData})
      
      return {success: true, message: "You've get weeklyPlan", updateChallenge}
    } catch (error) {
      console.log(error)
      return {success: false, message: "Somthing Wrong!"}
    }
  },

  actionGetWeeklyPlan_: async(value, token) => {
    try {
      console.log("Hi from weekly-store")
      const res = await actionGetWeeklyPlan(value, token)
      console.log("res=", res.data)

      const {weeklyPlanData} = res.data
      set({weeklyPlanData})

    } catch (error) {
      console.log(error)
      return {success: false, message: "Somthing Wrong!"}
    }
  }
})

const useWeeklyStore = create(persist(weeklyStore, {name: "weekly-store"}))

export default useWeeklyStore