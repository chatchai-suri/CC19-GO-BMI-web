
import React, { useEffect, useState } from 'react'
import { actionGetWeeklyPlanById } from '../api/user'
import { useParams } from 'react-router'
import useAuthStore from '../store/auth-store'
import WeeklyList from '../components/WeeklyList'

const EditResult = () => {
  const {id} = useParams()
  console.log("useParams====", id)

  // Zustand
  const token = useAuthStore((state) => (state.token))
  

  const [weeklyPlanDataById, setWeeklyPlanDataById] = useState([])

  const hdlGetWeeklyPlanById = async() => {
    try {
      const result = await actionGetWeeklyPlanById(token, id)
      console.log("result.data.weeklyPlanDataById = ", result.data.weeklyPlanDataById)
      setWeeklyPlanDataById(result.data.weeklyPlanDataById)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    hdlGetWeeklyPlanById()
  },[])

  const hdlEditWeightResult = (id) => {
    console.log("id*******", id)
  }

  return (
    <div className="flex w-full h-full justify-center g-4 bg-slate-100">
      {/* card program name & weeklyPlan */}
      <div className="w-auto h-auto p-4 rounded-md shadow-md border">
        {/* program header */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          โปรแกรมรายสัปดาห์: ควบคุมอาหาร และออกกำลังกาย
        </h1>
        <h1 className="text-xl font-bold text-emerald-900 text-left">
          ชื่อโปรแกรม: 
        </h1>
        {/* weeklyPlan display */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-emerald-800 text-black">
                <th className="border px-4 py-2">Week</th>
                <th className="border px-4 py-2">Breakfast</th>
                <th className="border px-4 py-2">Lunch</th>
                <th className="border px-4 py-2">Dinner</th>
                <th className="border px-4 py-2">Snack</th>
                <th className="border px-4 py-2">Calories kcal</th>
                <th className="border px-4 py-2">Exercise Type</th>
                <th className="border px-4 py-2">Frequency times/week</th>
                <th className="border px-4 py-2">Duration min</th>
                <th className="border px-4 py-2">Target Weight kg</th>
                <th className="border px-4 py-2">Actual Weight kg</th>
              </tr>
            </thead>
            <tbody>
              {weeklyPlanDataById.map((week) => (
                <WeeklyList key={week.id} week={week} hdlGetWeeklyPlanById={hdlGetWeeklyPlanById} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditResult