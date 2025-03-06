//rfce
import React, { useEffect, useState } from "react";
import useUserStore from "../store/user-store";
import useWeeklyStore from "../store/weekly-store";
import { Edit2Icon, EditIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Buttons from "../components/form/Buttons";
import WeeklyList from "../components/WeeklyList";
import useAuthStore from "../store/auth-store";

const CreatePlan = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;

  const [editing, setEdit] = useState(false);

  // Zustand
  const challengeData = useUserStore((state) => state.challengeData);
  console.log("challengeData = ", challengeData);
  const token = useAuthStore((state) => state.token)

  // const actionGetWeeklyPlan_ = useWeeklyStore((state) => state.actionGetWeeklyPlan_)
  // useEffect(()=>{
  //   actionGetWeeklyPlan_(value, token)
  // }, [])

  const weeklyPlanData = useWeeklyStore((state) => state.weeklyPlanData);
  console.log("weeklyPlanData =", weeklyPlanData);

  const hdlEditWeightResult = async (value, id) => {
    console.log("value=", value);
    console.log("id=", id);
  };

  return (
    <div className="flex w-full h-full justify-center g-4 bg-slate-100">
      {/* card program name & weeklyPlan */}
      <div className="w-auto h-auto p-4 rounded-md shadow-md border">
        {/* program header */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          โปรแกรมรายสัปดาห์: ควบคุมอาหาร และออกกำลังกาย
        </h1>
        <h1 className="text-xl font-bold text-emerald-900 text-left">
          ชื่อโปรแกรม: {challengeData.name}
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
              {weeklyPlanData.map((week, index) => (
                <WeeklyList key={week.id} week={week} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
