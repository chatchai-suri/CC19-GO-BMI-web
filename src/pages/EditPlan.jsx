//rfce
import React, { useEffect, useState } from 'react'
import useUserStore from '../store/user-store'
import useAuthStore from '../store/auth-store'
import { actionGetChallengeAll } from '../api/user'
import ChallengeList from '../components/ChallengeList'



const EditPlan = () => {

  // Zustand
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)
  console.log("user = ", user)

  const [challengeListData, setChallengeListData] = useState([])
  
  const hdlChallengeList = async() => {
    try {
      const result = await actionGetChallengeAll(token)
      console.log("result = ", result)
      setChallengeListData(result.data.challengeList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    hdlChallengeList()
  }, [])

  console.log("challengeListData = ", challengeListData)
  

  return (
    <div className="flex w-full h-full justify-center g-4 bg-slate-100">
      {/* card program name list */}
      <div className="w-auto h-auto p-4 rounded-md shadow-md border">
        {/* program header */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          จัดการโปรแกรม: เลือกใช้ / ลบ โปรแกรม
        </h1>
        <h1 className="text-xl font-bold text-emerald-900 text-left">
          รายชื่อชื่อโปรแกรม:
        </h1>
        {/* weeklyPlan display */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-emerald-800 text-black">
                <th className="border px-4 py-2">ชื่อโปรแกรม</th>
                <th className="border px-4 py-2">ส่วนสูง ซม.</th>
                <th className="border px-4 py-2">น้ำหนัก กก.</th>
                <th className="border px-4 py-2">BMI</th>
                <th className="border px-4 py-2">คำแนะนำ</th>
                <th className="border px-4 py-2">นำหนักเป้าหมาย กก.</th>
                <th className="border px-4 py-2">ระยะเวลา สัปดาห์</th>
                <th className="border px-4 py-2">เลือกโปรแกรม</th>
                <th className="border px-4 py-2">แก้ไขชื่อ</th>
                <th className="border px-4 py-2">ลบโปรแกรม</th>
              </tr>
            </thead>
            <tbody>
              {challengeListData.map((challengeListData) => (
                <ChallengeList key={challengeListData.id} challengeListData={challengeListData} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditPlan