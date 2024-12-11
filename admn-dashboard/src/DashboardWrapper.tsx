import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";

const Dashboardlayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className={`flex w-full`}>
        <Sidebar/>
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gradient-to-b from-white from-0% to-customGray to-30%`}>
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