import { ChartNoAxesCombined } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { UsersRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Banknote } from "lucide-react";
// import { useState } from "react";

import DashboardKPITab from "../components/DashboardKPITab";
import DashboardAreaChart from "../components/DashboardAreaChart";
import DashboardRight from "../components/DashboardRight";
import DashboardUpcomingCard from "../components/DashboardUpcomingCard";
import DashboardTable from "../components/DashboardTable";
import { tableData } from "../constants/tableData";
import DashboardExpensesStatus from "../components/DashboardExpensesStatus";

const Dashboard = () => {
  // const [timeRange, setTimeRange] = useState('Month');
  // const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full">
      <div className="flex-1 basis-3/4">
        <div className="flex flex-wrap md:flex-row gap-10 mt-4">
          <DashboardKPITab
            Icon={ChartNoAxesCombined}
            header="Total Sales"
            description="+50% increase"
            kpiSymbol="$"
            price={278}
            priceLabel="m"
            customClass="bg-customOrange"
            priceClass="text-customOrange"
          />

          <DashboardKPITab
            Icon={BadgePercent}
            header="Daily Sales"
            description="-13% sales"
            kpiSymbol="$"
            price={421}
            priceLabel="k"
            customClass="bg-customBlue"
            priceClass="text-sidebarBottom"
          />

          <DashboardKPITab
            Icon={UsersRound}
            header="Daily Users"
            description="+46% New Users"
            price={4215}
            customClass="bg-customGreen"
            priceClass="text-sidebarBottom"
          />

          <DashboardKPITab
            Icon={ShoppingCart}
            header="Product"
            description="+25% New Products"
            price={584}
            customClass="bg-sidebarBottom"
            priceClass="text-sidebarBottom"
          />

          <DashboardKPITab
            Icon={Banknote}
            header="Daily Users"
            description="+46% New"
            kpiSymbol="$"
            price={219.0}
            customClass="bg-customYellow"
            priceClass="text-sidebarBottom"
          />
        </div>

        <div className="bg-white p-5 rounded-md mt-10">
          <div className="flex flex-row justify-between item-center mb-3">
            <h3 className="font-bold ml-10 text-sidebarBottom">Summary Sales</h3>
            <select
              // value={timeRange}
              // onChange={(e) => handleFilterChange(e.target.value)}
              style={{
                padding: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            >
              <option value="Month">Month</option>
              <option value="Week">Week</option>
              <option value="Day">Day</option>
            </select>
          </div>
          <DashboardAreaChart />
        </div>

        <div className="bg-white mt-10 px-4 rounded-md m-auto overflow-x-auto md:w-full">
          <div className="flex flex-row justify-between py-6">
            <div>
              <h1 className="font-bold text-gray-500">Last Order</h1>
            </div>

            <div>
            <select
              // value={timeRange}
              // onChange={(e) => handleFilterChange(e.target.value)}
              style={{
                padding: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            >
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
            </div>
          </div>
          <DashboardTable data={tableData} />
        </div>
        </div>

        {/* The third half */}

        {/* VIRTUAL CARD COMPONENT */}
        <div className="flex-2 basis-1/4 mt-10 md:mt-0">
          <div className="ml-8 mt-4">
                <DashboardRight />
          </div>

              {/* UPCOMING PAYMENTS CARD */}
          <div className="ml-8 mt-8">
            <DashboardUpcomingCard />
          </div>

          {/* EXPENSES STATUS COMPONENT. */}
          <div className="mt-11 ml-8">
            <DashboardExpensesStatus />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
