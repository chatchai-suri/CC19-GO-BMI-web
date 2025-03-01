import axios from "axios"
import { useForm } from "react-hook-form";
import { createAlert } from "../utils/createAlert";
import { checkEmailOrMobile } from "../utils/validator";
import { actionLogin, actionRegister } from "../api/auth";
import Buttons from "../components/form/Buttons";
import useAuthStore from "../store/auth-store";
import { useNavigate } from "react-router";
import FormInput from "../components/form/FormInput";

const Login = () => {
  //Zustand
  const actionLogin_ = useAuthStore((state) => state.actionLogin_)
  const navigate = useNavigate()

  const { register, handleSubmit, formState, reset} = useForm();
  const {isSubmitting, errors} = formState
  console.log(errors)

  const hdlLogin = async (value) => {
    console.log(value)
    const {identity, password} = value

    // vailidation of input value
    if(!(identity.trim() && password.trim())) {
      createAlert("error", "Please fill all data")
    }

    
    // check identitykey is email or mobile no.
    const indentityKey = checkEmailOrMobile(identity)
    console.log(indentityKey)

    // delay
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // sent agrument value to backend for login
    const res = await actionLogin_(value)
    console.log(res)
    if (res.sucess) {
      roleRedirect(res.role)
      reset()
      createAlert("info", "Welcome, back")
    }else {
      createAlert("info", "Something Wrong!!!")
    }
  }


  const roleRedirect = (role) => {
    if(role === 'ADMIN') {
      navigate("/admin")
    }else{
      navigate("/user")
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-[300px] p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-emerald-900 text-center">
          Login
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlLogin)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="identity" placeholder="Email or Mobile no." errors={errors}/>
            {/* <input
              className="w-full border rounded-lg border-gray-400"
              type="text"
              {...register("identity")}
              placeholder="Email or Moible no."
            /> */}
            <input
              className="w-full border rounded-lg border-gray-400"
              type="password"
              {...register("password")}
              placeholder="password"
            />
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
