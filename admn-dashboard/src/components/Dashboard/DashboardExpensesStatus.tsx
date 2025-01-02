import { data } from "../../constants/data";
import {
  Line,
  LineChart,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DashboardExpensesStatus = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md w-full">

      <div className="flex flex-row justify-between w-full items-center">
        <div>
            <h1 className="text-sidebarBottom font-bold text-lg">Expenses Status</h1>
        </div>
        <div className="bg-customGreen/20 px-1 rounded-lg">
          <p className="text-customGreen font-semibold">On Track</p>
        </div>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer>
        <LineChart
          // width={240}
          // height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#ff7556" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardExpensesStatus;
