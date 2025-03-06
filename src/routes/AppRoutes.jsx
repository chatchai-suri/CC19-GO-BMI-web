//rfce
import { Route, Routes } from "react-router";
import Survey from "../pages/Survey";
import SetTarget from "../pages/SetTarget";
import Authenticate from "../pages/Authenticate";
import CreatePlan from "../pages/CreatePlan";
import EditPlan from "../pages/EditPlan";
import EditResult from "../pages/EditResult";
import MainNavBar from "../components/MainNavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import UserNavBar from "../components/UserNavBar";
import Layout from "../layout/Layout";
import SurveyResult from "../pages/SurveyResult";
import UpdateProfile from "../pages/UpdateProfile";

const AppRoutes = () => {
  return (
    <>
    <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="user" element={<Layout />}>
          <Route index element={<User />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="survey" element={<Survey />} />
          <Route path="survey-result" element={<SurveyResult />} />
          <Route path="set-target" element={<SetTarget />} />
          <Route path="create-plan" element={<CreatePlan />} />
          <Route path="edit-plan" element={<EditPlan />} />
          <Route path="edit-result/:id" element={<EditResult />} />
        </Route>


      </Routes>
    </>
  );
};
export default AppRoutes;