import React from "react";
import Buttons from "../components/form/Buttons";
import { useForm } from "react-hook-form";
import { actionUpdateProfile } from "../api/user";
import useAuthStore from "../store/auth-store";
import FormInput from "../components/form/FormInput";
import { createAlert } from "../utils/createAlert";
import useUserStore from "../store/user-store";

const UpdateProfile = () => {
  //Zustand
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.actionUpdateProfile_)

  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;

  const hdlUpdateProfile = async (value) => {
    console.log("value=", value.profileImage.length);
    const profileImageSelected = value.profileImage.length
    // check whether new profile image is selected
    if(!profileImageSelected) {
      createAlert("info", "กรุณาเลือกรูปโปรไฟล์ที่ต้องการ")
    }

    try {
      const formData = new FormData();
      formData.append("image", value.profileImage[0]);
      await updateProfile(formData, token);
      createAlert("success", res.data.message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-full justify-center bg-slate-100">
      {/* card update-profile input */}
      <div className="bg-white w-80 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          อัปเดทโปรไฟล์
        </h1>
        <h1 className="text-lg font-semibold text-emerald-900 text-left">
          สวัสดี: {user.name}
        </h1>
        {/* form */}
        <form onSubmit={handleSubmit(hdlUpdateProfile)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput
              type="file"
              register={register}
              name="profileImage"
              placeholder="เลือกรูปที่ต้องการ"
              errors={errors}
            />
            {/* <input type="file" {...register("profileImage")} placeholder="เลือกรูป" /> */}
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Update Profile" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
