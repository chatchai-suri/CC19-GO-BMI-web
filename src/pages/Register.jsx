import axios from "axios"
import { useForm } from "react-hook-form";
import { createAlert } from "../utils/createAlert";
import { checkEmailOrMobile } from "../utils/validator";
import { actionRegister } from "../api/auth";
import Buttons from "../components/form/Buttons";

const Register = () => {
  const { register, handleSubmit, formState, reset} = useForm();
  const {isSubmitting, errors} = formState

  const hdlRegister = async (value) => {
    console.log(value)
    const {identity, name, password, confirmPassword} = value

    // vailidation of input value
    if(!(identity.trim() && name.trim() && password.trim() && confirmPassword.trim())) {
      createAlert("error", "Please fill all data")
    }

    if(password !== confirmPassword) {
      createAlert('error', 'Please check Confirm-password')
    }
    
    // check identitykey is email or mobile no.
    const indentityKey = checkEmailOrMobile(identity)
    console.log(indentityKey)

    // delay
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // sent agrument value to backend for register
    try {
      const res = await actionRegister(value)
      console.log(res)
      reset()
      createAlert("success", "Register Successful")
    } catch (error) {
      createAlert("info", error.response.data.message)
      console.log(error.response.data.message)
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Register
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlRegister)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("identity")}
              placeholder="Email or Moible no."
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("name")}
              placeholder="your desired name"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <input
              className="w-full border rounded-lg border-gray-400"
              type="password"
              {...register("confirmPassword")}
              placeholder="confirmpassword"
            />
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
