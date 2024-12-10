import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import Menu from "./Menu";
import { ChevronDown } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-sidebarTop to-sidebarBottom h-screen p-2">
      <div className="px-1 w-[200px] mt-6">

          {/*  logo */}
        <div className="flex gap-3 items-center">
          <div className="">
            <img src={logo} alt="logo icon" className="h-10 w-10 rounded-md"/>
          </div>
          <p className="text-white font-semibold">By<span className="text-customOrange">tes</span></p>
        </div>

        {/* Menu */}
        <div className="text-white font-semibold">
          <Menu />
        </div>

        {/* USER LABEL */}
        <div className="flex flex-row justify-center items-center gap-2 bg-customOrange/90 text-white p-2 rounded-lg mt-24">
          <div>
            <img src={profile} alt="user profile img" className="h-10 w-10 rounded-full"/>
          </div>
          <div className="tracking-tighter">
            <h4 className="font-semibold">Arnold Oduor</h4>
            <p className="text-sm">Retail Manager</p>
          </div>
          <div className="hover:cursor-pointer">
            <ChevronDown />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar