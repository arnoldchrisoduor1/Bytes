import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import Menu from "./Menu";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sidebar = () => {


  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.sidebarOpen
  )

  return (
    <div
      className={`
      bg-gradient-to-b from-sidebarTop to-sidebarBottom 
      h-screen 
      fixed 
      left-0 
      top-0 
      transition-all 
      duration-300 
      ${isSidebarOpen ? "w-[200px]" : "w-20"}
      overflow-hidden
    `}
    >

      {/* Scrollable Content Container */}
      <div
        className="
        px-1 
        w-full 
        mt-6 
        h-[calc(100vh-2rem)] 
        overflow-y-auto 
        scrollbar-thin 
        scrollbar-thumb-customOrange 
        scrollbar-track-sidebarTop
      "
      >
        {/* Logo */}
        <div className="flex gap-3 items-center px-4 mb-6">
          <div>
            <img src={logo} alt="logo icon" className="h-10 w-10 rounded-md" />
          </div>
          {isSidebarOpen && (
            <p className="text-white font-semibold">
              By<span className="text-customOrange">tes</span>
            </p>
          )}
        </div>

        {/* Menu */}
        <div className="text-white font-semibold">
          <Menu/>
        </div>
      </div>

      {/* User Section - Sticky Bottom */}
      <div
        className="
        absolute 
        bottom-4 
        left-[50%]
        -translate-x-[50%]
        w-[90%] 
        flex
        flex-row 
        justify-center 
        items-center 
        gap-2 
        bg-customOrange/90 
        text-white 
        p-2 
        transition-all 
        duration-300
        rounded-md
      "
      >
        <div>
          <img
            src={profile}
            alt="user profile img"
            className="h-10 w-10 rounded-full"
          />
        </div>
        {isSidebarOpen && (
          <div className="tracking-tighter">
            <h4 className="font-semibold">Arnold O</h4>
            <p className="text-sm">Manager</p>
          </div>
        )}
        {isSidebarOpen && (
          <div className="hover:cursor-pointer">
            <ChevronDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
