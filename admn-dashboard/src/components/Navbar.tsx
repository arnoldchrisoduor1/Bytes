import { ChevronLeft, Search } from "lucide-react";
import { Moon } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useCallback } from "react";
import { setSidebarOpenState } from "../redux/slices/sidebarOpenSlice";

const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();

  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.sidebarOpen
  );

  const handleSidebarToggle = useCallback(() => {
    dispatch(setSidebarOpenState(!isSidebarOpen));
  }, [dispatch, isSidebarOpen]);

  return (
    <section className="">
      <nav className="">
        <div className="flex flex-row justify-between gap-2 items-center">
          <div className="flex flex-row gap-3">
            {/* Toggle Button */}
          <div>
            <button
              onClick={() => handleSidebarToggle()}
              className="zz
              bg-customOrange/90 
              text-white 
              rounded-full 
              p-2 hover:bg-customOrange">
              {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>
            <div className="flex flex-row p-2 lg:w-[500px] bg-customGray rounded-md px-4">
              <input
                type="text"
                alt="searchbar"
                placeholder="'cakes'"
                className="w-[100px] md:w-[250px] lg:w-[500px] bg-transparent outline-none border-none"
              />
              <Search className="flex-end" color="gray" />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="hidden md:block bg-customGray p-2 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300">
              <Moon color="gray" />
            </div>

            <div className="hidden md:block bg-customGray p-2 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300 h-10">
              <Bell color="gray" className=""/>
            </div>

            <div className=" flex flex-row bg-customGray h-10 py-2 px-4 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300">
              <ChevronRight color="tomato" />
              <p className="font-bold text-sidebarBottom hidden md:block">Log Out</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
