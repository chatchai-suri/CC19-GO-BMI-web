// rfce
import React, { useEffect, useState } from "react";
import useUserStore from "../store/user-store";
import useWeeklyStore from "../store/weekly-store";
import { CircleCheck, Edit2Icon, EditIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Buttons from "../components/form/Buttons";
import { actionUpdateWeeklyPlan } from "../api/user";
import useAuthStore from "../store/auth-store";

const WeeklyList = (props) => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;

  // zustand
  const token = useAuthStore((state) => state.token);

  const [weightResult, setWeightResult] = useState("");
  const [id, setId] = useState("");
  // console.log("id*****", id);
  const [editing, setEditing] = useState(false);

  const { week, hdlGetWeeklyPlanById } = props;
  console.log("week = ", week);

  const hdlClick = (id) => {
    console.log("id====", id);
    console.log("weightResult====", weightResult);
    document.getElementById("my_modal_3").close();
  };

  const hdlEditWeightResult2 = async() => {
    try {
      console.log("id----", id)
      console.log("weightResult----", weightResult)
      const value = { id: id, weightResult: weightResult }
      const result = await actionUpdateWeeklyPlan(value, token);
      console.log(result)
      hdlGetWeeklyPlanById()
      setEditing(!editing)
    } catch (error) {
      console.log(error)
    }
  }


  const hdlEditWeightResult = async (value) => {
    console.log("value=", value);
    console.log("week.id=", week.id);
    console.log("challenge.id=", week.challengeId);
    const newValue = { ...value, id: week.id, challengeId: week.challengeId };
    console.log("newValue =", newValue);

    const result = await actionUpdateWeeklyPlan(newValue, token);
    console.log(result);
    document.getElementById("my_modal_3").close();
  };

  // useEffect(() => {
  //   hdlGetWeeklyPlanById()
  // },[])

  return (
    <>
      <tr className="border text-gray-700">
        <td className="border px-4 py-2 text-center">{week.week}</td>
        <td className="border px-4 py-2">{week.breakfast}</td>
        <td className="border px-4 py-2">{week.lunch}</td>
        <td className="border px-4 py-2">{week.dinner}</td>
        <td className="border px-4 py-2">{week.snack}</td>
        <td className="border px-4 py-2 text-center">{week.calories}</td>
        <td className="border px-4 py-2">{week.exerciseType}</td>
        <td className="border px-4 py-2 text-center">{week.exerciseFrequency}</td>
        <td className="border px-4 py-2 text-center">{week.exerciseDuration}</td>
        <td className="border px-4 py-2 text-center">{week.targetWeight}</td>
        <td className="border px-4 py-2 text-center">
          {/* {editing && <input placeholder="input your weight" />} */}
          {week.weightResult}
          {editing && <input 
            placeholder="ใส่นำ้หนักจริง"
            onChange={(e) => setWeightResult(e.target.value)}
            />}
        </td>
        <td className="border px-4 py-2 text-center">
          <button
            className="btn"
            // onClick={() => alert(week.id)}
            onClick={() => {
            //   // document.getElementById("my_modal_3").showModal();
              setId(week.id);
              setEditing(!editing);
            }}
          >
            {
              editing
              ?  <CircleCheck onClick={() => hdlEditWeightResult2()} />
              :  <Edit2Icon />
            }
           
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
              <div className=" flex flex-col py-4 gap-4">
                <input
                  type="text"
                  placeholder="ใส่นำ้หนักจริง"
                  onChange={(e) => setWeightResult(e.target.value)}
                />
                <button
                  className="bg-emerald-900 text-white px-3 py-1 rounded hover:bg-emerald-400"
                  onClick={() => hdlClick(week.id)}
                >
                  Ok
                </button>
                {/* <form onSubmit={handleSubmit(hdlEditWeightResult)}>
                  <div className="flex flex-col px-2 py-4 gap-4">
                    <input
                      className="w-full border rounded-lg border-gray-400"
                      type="text"
                      {...register("weightResult")}
                      placeholder="input actual weight"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Buttons isSubmitting={isSubmitting} label="บันทึก" />
                  </div>
                </form> */}
              </div>
            </div>
          </dialog>
        </td>
      </tr>
    </>
  );
};

export default WeeklyList;
