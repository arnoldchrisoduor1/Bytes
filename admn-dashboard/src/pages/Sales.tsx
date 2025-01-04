import DashboardKPITab from "../components/Dashboard/DashboardKPITab";
import { PackageOpen } from "lucide-react";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { PackageCheck } from "lucide-react";

const Sales = () => {
  return (
    <div className="mt-10">
      <div>
        <div>
          <div>
            <h1 className="text-sidebarBottom font-extrabold text-3xl">
              Sales Activity
            </h1>
          </div>
          <div className="flex flex-wrap md:flex-row gap-10 mt-4">
            <DashboardKPITab
              Icon={PackageOpen}
              header="To be Packaged"
              description="+50% increase"
              kpiSymbol="$"
              price={278}
              priceLabel="m"
              customClass="bg-customOrange"
              priceClass="text-customOrange"
            />

            <DashboardKPITab
              Icon={Truck}
              header="To be Shipped"
              description="-13% sales"
              kpiSymbol="$"
              price={421}
              priceLabel="k"
              customClass="bg-customYellow"
              priceClass="text-sidebarBottom"
            />

            <DashboardKPITab
              Icon={Package}
              header="To be Delivererd"
              description="+46% New Users"
              price={4215}
              customClass="bg-sidebarBottom"
              priceClass="text-sidebarBottom"
            />

            <DashboardKPITab
              Icon={ReceiptText}
              header="To be Invoiced"
              description="+25% New Products"
              price={584}
              customClass="bg-customBlue"
              priceClass="text-sidebarBottom"
            />

            <DashboardKPITab
              Icon={PackageCheck}
              header="Completed"
              description="+46% New"
              kpiSymbol="$"
              price={219.0}
              customClass="bg-customGreen"
              priceClass="text-sidebarBottom"
            />
          </div>
        </div>
      </div>


        {/* Product Details */}
      <div className="mt-10">
        <div>
        <h1 className="text-sidebarBottom font-extrabold text-3xl">Product Details</h1>
        </div>
      </div>
    </div>
  );
};

export default Sales;
