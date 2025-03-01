import { Link } from "react-router";


function MainNavBar() {
 

  return (
    
    <nav
      className="bg-green-950 text-white 
    flex justify-between font-semibold px-8 py-2
    rounded-md shadow w-full
    "
    >
      <div className="flex gap-4">
        <Link to="/">Logo</Link>
        <Link to="">เกี่ยวกับเรา</Link>
      </div>

      <div className="flex gap-4">
        <Link to="login"> เข้าสู่ระบบ </Link>
        <Link to="register"> ลงทะเบียน </Link>
      </div>
    </nav>
  );
}
export default MainNavBar;