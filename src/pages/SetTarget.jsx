//rfce
import React from "react";
import Buttons from "../components/form/Buttons";
import FormInput from "../components/form/FormInput";
import useUserStore from "../store/user-store";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { createAlert } from "../utils/createAlert";
import { actionWeeklyPlan } from "../api/user";
import useAuthStore from "../store/auth-store";
import useWeeklyStore from "../store/weekly-store";

const SetTarget = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;
  const navigate = useNavigate();

  // Zustand
  const token = useAuthStore((state) => state.token);
  const challengeData = useUserStore((state) => state.challengeData);

  const setChallengeData = useUserStore(state => state.setChallengeData)
  // console.log("challengeData = ", challengeData);
  const { id: challengeId, userId } = challengeData;
  console.log("challengeId = ", challengeId);
  console.log("userId = ", userId);
  const actionWeeklyPlan_ = useWeeklyStore((state) => state.actionWeeklyPlan_);
  const weeklyPlanData = useWeeklyStore((state) => state.weeklyPlanData);
  console.log(weeklyPlanData);

  const hdlSetTarget = async (value) => {
    console.log(value);
    const { weightTarget, periodWeek, name } = value;
    const newValue = { ...value, id: challengeId };
    console.log("newValue = ", newValue);

    // validation
    if (!(weightTarget.trim() && periodWeek.trim() && name.trim())) {
      createAlert("error", "Please fill all data");
    }
    if (isNaN(weightTarget) || isNaN(periodWeek)) {
      createAlert("error", "Invalid data type");
    }
    const weeklyPlan = await actionWeeklyPlan_(newValue, token);

    setChallengeData(weeklyPlan.updateChallenge)
    console.log("weeklyPlan = ", weeklyPlan);
    console.log("success = ", weeklyPlan.success);

    if (weeklyPlan.success) {
      console.log("*", weeklyPlan);
      createAlert("success", weeklyPlan.message);
      navigate("/user/create-plan");
    } else {
      createAlert("info", weeklyPlan.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-center g-4 bg-slate-100">
      {/* card servey-data + servey-result + taget-setup */}
      <div className="w-64 h-[300px] p-4 rounded-md shadow-md border">
        {/* card servey-data */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          ข้อมูลพื้นฐาน
        </h1>
        {/* servey-data display */}
        <div className="flex flex-col px-2 py-4 gap-4">
          <h1 className="text-lg font-semibold text-emerald-900 text-left">
            อายุ: {challengeData.age}
          </h1>
          <h1 className="text-lg font-semibold text-emerald-900 text-left">
            ส่วนสูง: {challengeData.heightCurrent}
          </h1>
          <h1 className="text-lg font-semibold text-emerald-900 text-left">
            น้ำหนัก: {challengeData.weightCurrent}
          </h1>
        </div>
      </div>
      <div className="w-80 h-[300px] p-4 rounded-md shadow-md border">
        {/* card servey-result display */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          ผลประเมินเบื้องต้น
        </h1>
        {/* servey-data display */}
        <div className="h-[200px] flex flex-col px-2 py-4 gap-4 bg-slate-50">
          <p className="text-lg font-semibold text-emerald-900 text-left">
            ผลประเมิน: {challengeData.surveyResult}
          </p>
        </div>
      </div>
      <div className="bg-accent w-64 h-[300px] p-4 rounded-md shadow-md border">
        {/* card target and program name setup */}
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          ตั้งเป้าหมาย และชื่อโปรแกรม
        </h1>
        {/* form input target and program name setup */}
        <form onSubmit={handleSubmit(hdlSetTarget)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("weightTarget")}
              placeholder="นำหนักเป้าหมาย:"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("periodWeek")}
              placeholder="ระยะเวลาที่ใช้(สัปดาห์):"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("name")}
              placeholder="ตั้งชื่อโปรแกรม:"
            />
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <Buttons isSubmitting={isSubmitting} label="กดเพื่อสร้างโปรแกรม" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetTarget;
