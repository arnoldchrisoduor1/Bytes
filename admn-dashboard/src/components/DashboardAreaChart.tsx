import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import { data } from "../constants/data";

const DashboardAreaChart = () => {
  return (
    <div>
         <AreaChart
          width={1030}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7556" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff7556" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#ff7556"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
    </div>
  )
}

export default DashboardAreaChart