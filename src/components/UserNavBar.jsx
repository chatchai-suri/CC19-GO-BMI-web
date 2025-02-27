import { Link } from "react-router";

function UserNavBar() {
  return (
    <nav
      className="bg-slate-400 text-black 
    flex justify-between font-semibold px-8 py-2
    rounded-md shadow w-full
    "
    >
      <div className="flex gap-4">
        <Link to="">Current Program</Link>
        <Link to="">Mission to The Moon</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/user/survey"> สร้างโปรแกรมใหม่ </Link>
        <Link to="/user/editplan"> เลือก/ลบ โปรแกรม </Link>
      </div>
    </nav>
  );
}
export default UserNavBar;