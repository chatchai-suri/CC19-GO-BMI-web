import React from "react";
import useUserStore from "../store/user-store";
import Buttons from "../components/form/Buttons";
import { useNavigate } from "react-router";

const SurveyResult = () => {
  let age = 30;
  // Zustand
  const challengeData = useUserStore((state) => state.challengeData);
  console.log(challengeData);

  const navigate = useNavigate()

// const handleClick = () => {
//   navigate("/user/survey")
// }

  return (
    <div className="flex w-full h-full justify-center g-4 bg-slate-100">
      {/* card servey-data + servey-result */}
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
            อายุ: {challengeData.heightCurrent}
          </h1>
          <h1 className="text-lg font-semibold text-emerald-900 text-left">
            อายุ: {challengeData.weightCurrent}
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
        <div className="flex justify-center gap-4 mt-2">
          <Buttons label="ประเมินใหม่" handleClick={() => navigate("/user/survey")} />
          <Buttons label="ตั้งเป้าหมาย" />
        </div>
      </div>
    </div>
  );
};

export default SurveyResult;
