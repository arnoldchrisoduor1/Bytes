import { BarChart, Bar, YAxis, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ProductBarData } from "../../constants/ProductBarChartData";

export default function ProductBarChart() {
  return (
    <div className="w-full h-72 m-auto">
      
    <BarChart width={400} height={300} data={ProductBarData} barSize={29}>
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#5062a0" label="amt" />
    </BarChart>
    
    </div>
  );
}
