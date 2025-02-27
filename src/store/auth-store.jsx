import axios from "axios"
import { create } from "zustand"
import { actionLogin } from "../api/auth"
import { persist } from "zustand/middleware"


const authStore = (set) => ({
  user: [],
  token: null,
  actionLogin_ : async(value) => {
    try {
      const res = await actionLogin(value)
      console.log("res.data=", res.data)

      const {user, token} = res.data
      set({token: token, user: user})

      return {sucess: true, role: user.role}
    } catch (error) {
      // console.log(error.response.data.message)
      return {sucess: false, error: error.response.data.message}
    }
  }
})

const useAuthStore = create(persist(authStore, {name: "auth-store"}))

export default useAuthStore