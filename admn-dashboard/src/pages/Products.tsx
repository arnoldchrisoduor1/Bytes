import ProductsPieChart from "../components/Products/ProductsPieChart";
import ProductBarChart from "../components/Products/ProductBarChart";
import ProductTreetableChart from "../components/Products/ProductTreetableChart";
import ProductKPI from "../components/Products/ProductKPI";
import { Warehouse } from "lucide-react";
import { CirclePercent } from "lucide-react";
import { PackageX } from "lucide-react";
import { Archive } from "lucide-react";
import ProductTable from "../components/Products/ProductTable";
import ProductRecentEvents from "../components/Products/ProductRecentEvents";
import { ProductsRecentEventsData } from "../constants/ProductRecentEventsData";

const Products = () => {
  return (
    <div className="mt-8">
      <div>
        <div>
          <h1 className="text-sidebarBottom font-bold text-3xl">
            Products Analysis
          </h1>
        </div>
        <div className="flex flex-col">
          {/* Top Layer */}
          <div className="flex">
            {/* Analysis KPIs and graphs */}
            <div className="flex mt-4 gap-8 w-full">

            <div className="flex flex-row flex-1 basis-3/4 gap-3">
              {/* Availability Pie */}
              <div className="bg-white rounded-md">
                <div className="mt-4">
                  <h2 className="text-sidebarTop font-semibold text-center text-xl">
                    Availability
                  </h2>
                </div>
                <ProductsPieChart />
              </div>

              {/* Top 5 Bar Chart */}
              <div className="bg-white rounded-md p-2">
                <div className="mb-2">
                  <h2 className="text-sidebarBottom font-semibold text-center text-xl">
                    Top Performing Products
                  </h2>
                </div>
                <ProductBarChart />
              </div>

              {/* Category Performace Treetable. */}
              <div className="bg-white rounded-md p-2">
                <div className="mb-2">
                  <h2 className="text-sidebarBottom font-semibold text-center text-xl">
                    Top Performing Categories
                  </h2>
                </div>
                <ProductTreetableChart />
              </div>
              </div>


              {/* KPIs */}
              <div className="flex flex-col flex-2 basis-1/4 h-84 justify-between">
                <ProductKPI
                  Icon={Warehouse}
                  heading="Total Stock Cost"
                  amount={60790000.45}
                  currency="USD"
                />
                <ProductKPI
                  Icon={CirclePercent}
                  heading="Inventory Turnover Ratio"
                  amount={78}
                  currency="%"
                />
                <ProductKPI
                  Icon={PackageX}
                  heading="Dead Stock (%)"
                  amount={17}
                  currency="%"
                />
                <ProductKPI
                  Icon={Archive}
                  heading="Space Utilization Rate (%)"
                  amount={75}
                  currency="%"
                />
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div className="flex flex-row gap-8 mt-10">
            <div className="flex-1 basis-4/6">
              <div className="mb-4">
                <h1 className="text-sidebarBottom font-bold text-3xl">
                  Inventory Table
                </h1>
              </div>
              <div className=" bg-white rounded-md">
              <ProductTable />
              </div>
            </div>

            {/* Recent Events */}
            <div className="flex-2 basis-2/6">
              <div className="mb-4">
                <h1 className="text-sidebarBottom font-bold text-3xl">
                  Recent Events
                </h1>
              </div>
              <div className="bg-white p-4 rounded-md">
                {ProductsRecentEventsData.map((item, index) => (
                  <div key={index}>
                    <ProductRecentEvents Icon={PackageX} name={item.name} time={item.time} timeLabel={item.timeLable} action={item.action} />
                  </div>
                ))}
                {/* <div className="h-10 w-1 bg-black m-auto"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
