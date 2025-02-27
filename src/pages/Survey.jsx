import React from "react";
import { useForm } from "react-hook-form";
import Buttons from "../components/form/Buttons";
import axios from "axios";
import { actionSurvey } from "../api/user";
import { createAlert } from "../utils/createAlert";
import useAuthStore from "../store/auth-store";
import useUserStore from "../store/user-store";

const Survey = () => {
  // Zustand
  const token = useAuthStore((state) => state.token);
  const actionSurvey_ = useUserStore((state) => state.actionSurvey_);
  const challengeData = useUserStore((state) => state.challengeData)
  // console.log("token=", token)

  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;
  // console.log(errors)

  const hdlSurvey = async (value) => {
    const { age, heightCurrent, weightCurrent } = value;

    // validation
    if (!(age.trim() && heightCurrent.trim() && weightCurrent.trim())) {
      createAlert("error", "Please fill all data");
    }
    // if((isNaN(age) || isNaN(heightCurrent) || isNaN(weightCurrent))) {
    //   createAlert("error", "Invalid data type")
    // }
    // console.log("value =", value)
    console.log("Hello");

    const res = await actionSurvey_(value, token);
    if (res.success) {
      console.log("*", res.data.challengeData);
      createAlert("success", message);
    }else{
      createAlert("info", message)
    }
  };
    console.log("**", challengeData)

  return (
    <div className="flex w-full h-full justify-center bg-slate-100">
      {/* card  survey data input*/}
      <div className="w-64 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          สำรวจภาพภาพปัจจุบัน : ข้อมูลพื้นฐาน
        </h1>
        {/* form */}
        <form onSubmit={handleSubmit(hdlSurvey)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("age")}
              placeholder="อายุ:"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("heightCurrent")}
              placeholder="ส่วนสูง:"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("weightCurrent")}
              placeholder="นำหนัก:"
            />
            <div className="flex justify-center">
              <Buttons
                isSubmitting={isSubmitting}
                label="กดเพื่อรับการประเมิน"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
