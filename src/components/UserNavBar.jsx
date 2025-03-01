import { Link } from "react-router";
import useAuthStore from "../store/auth-store";

function UserNavBar() {
  //zustand
  const user = useAuthStore((state) => state.user);
  console.log("user=", user);

  return (
    <nav
      className="bg-slate-400 text-black 
    flex justify-between font-semibold px-8 py-2
    rounded-md shadow w-full
    "
    >
      <div className="flex gap-2"> 
        <p>สวัสดี: {user.name} </p>
        <img src={user.profileImage} className="w-8 h-8"/>
      </div>
      <div className="flex gap-4">
        <Link to="">Current Program</Link>
        <Link to="">Mission to The Moon</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/user/survey"> สร้างโปรแกรมใหม่ </Link>
        <Link to="/user/editplan"> เลือก/ลบ โปรแกรม </Link>
        <Link to="/user/update-profile"> อัปเดทโปรไฟล์ </Link>
      </div>
    </nav>
  );
}
export default UserNavBar;
