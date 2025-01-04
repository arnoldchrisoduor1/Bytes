import { BarChart, Bar, YAxis, XAxis, Tooltip } from "recharts";
import { ProductBarData } from "../../constants/ProductBarChartData";

export default function ProductBarChart() {
  return (
    <BarChart width={400} height={300} data={ProductBarData} barSize={29}>
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#8884d8" label="amt" />
    </BarChart>
  );
}
