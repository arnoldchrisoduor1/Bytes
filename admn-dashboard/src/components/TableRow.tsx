interface TableRowProps {
    customer: string;
    date: string;
    product: string
    price: number;
    imageUrl: string;
}

const TableRow: React.FC<TableRowProps> = ({ customer, date, price, product, imageUrl }) => {
  return (
    <tr>
        <td className="text-left px-4 py-2">
            <div className="flex flex-row items-center gap-2">
                <img src={imageUrl} alt={customer} className="h-7 w-7 rounded-full" />
                <span className="text-gray-500">{customer}</span>
            </div>
        </td>
        <td className="text-left px-4 py-2 font-semibold">{date}</td>
        <td className="text-left px-4 py-2 font-semibold text-customOrange">${price.toFixed(2)}</td>
        <td className="text-left px-4 py-2 font-semibold">{product}</td>
    </tr>
  )
}

export default TableRow;