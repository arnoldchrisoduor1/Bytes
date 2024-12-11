import { ChartNoAxesCombined } from "lucide-react";
import { BadgePercent } from "lucide-react";
import { UsersRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Banknote } from "lucide-react";

import DashboardKPITab from "../components/DashboardKPITab";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row gap-3">
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
          description="+46% New"
          price={4215}
          customClass="bg-customGreen"
          priceClass="text-sidebarBottom"
        />

        <DashboardKPITab
          Icon={ShoppingCart}
          header="Product"
          description="+25% New"
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
    </div>
  );
};

export default Dashboard;
