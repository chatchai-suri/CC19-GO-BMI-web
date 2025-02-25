//rfce
import { Route, Routes } from "react-router";
import Survey from "../pages/Survey";
import SetTarget from "../pages/SetTarget";
import Authenticate from "../pages/Authenticate";
import CreatePlan from "../pages/CreatePlan";
import EditPlan from "../pages/EditPlan";
import EditResult from "../pages/EditResult";
import MainNavBar from "../components/MainNavBar";

const AppRoutes = () => {
  return (
    <>
    <MainNavBar />
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="Survey" element={<Survey />} />
        <Route path="SetTarget" element={<SetTarget />} />
        <Route path="CreatePlan" element={<CreatePlan />} />
        <Route path="EditPlan" element={<EditPlan />} />
        <Route path="EditResult" element={<EditResult/>} />
      </Routes>
    </>
  );
};
export default AppRoutes;