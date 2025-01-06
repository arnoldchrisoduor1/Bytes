import TableRow from "../TableRow";

interface TableProps {
  data : {
    customer: string;
    date: string;
    price: number;
    product: string;
    imageUrl: string;
  }[];
}

const DashboardTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse rounded-md overflow-hidden">
      <thead className="">
        <tr className="bg-sidebarBottom text-white/60">
          <th className="text-left px-4 py-2">Customer</th>
          <th className="text-left px-4 py-2">Date</th>
          <th className="text-left px-4 py-2">Price</th>
          <th className="text-left px-4 py-2">Product</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </tbody>
    </table>
  )
}

export default DashboardTable