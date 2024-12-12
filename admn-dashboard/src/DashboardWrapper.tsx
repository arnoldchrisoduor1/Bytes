import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";


const Dashboardlayout = ({ children } : { children: React.ReactNode }) => {

  const isSidebarOpen = useSelector(
    (state: RootState) => state.sidebar.sidebarOpen
  )

  return (
    <div className={`flex w-full`}>
        <Sidebar/>
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gradient-to-b from-white from-0% to-customGray to-50% transition-all duration-300 ${isSidebarOpen ? 'pl-60' : 'pl-28'}`}>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({ children } : { children: React.ReactNode }) => {
    return (
        <Dashboardlayout>{children}</Dashboardlayout>
    )
}

export default DashboardWrapper;