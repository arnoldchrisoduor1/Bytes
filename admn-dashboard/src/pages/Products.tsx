import ProductsPieChart from "../components/Products/ProductsPieChart";
import ProductBarChart from "../components/Products/ProductBarChart";
import ProductTreetableChart from "../components/Products/ProductTreetableChart";

const Products = () => {
  return (
    <div className="mt-10">
      <div>
        <div>
          <h1 className="text-sidebarBottom font-bold text-3xl">
            Products Analysis
          </h1>
        </div>
        <div>
            {/* Analysis Dashboards and graphs */}
            <div className="flex mt-8 gap-8">
                <div className="bg-white rounded-md">
                    <div className="mt-4">
                        <h2 className="text-sidebarTop font-semibold text-center text-xl">Availability</h2>
                    </div>
                    <ProductsPieChart />
                </div>

                {/* Top 5 Bar Chart */}
                <div className="bg-white rounded-md p-2">
                  <div className="mb-2">
                    <h2 className="text-sidebarBottom font-semibold text-center text-xl">Top Performing Products</h2>
                  </div>
                    <ProductBarChart />
                </div>

                {/* Category Performace Treetable. */}
                <div className="bg-white rounded-md p-2">
                  <div className="mb-2">
                    <h2 className="text-sidebarBottom font-semibold text-center text-xl">Top Performing Categories</h2>
                  </div>
                  <ProductTreetableChart />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
