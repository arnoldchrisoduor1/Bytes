import { ProductTableData } from "../../constants/ProductTableData";

const ProductTable = () => {
  const ProductHeading = [
    "Product",
    "Qty.",
    "Date Received",
    "Value",
    "Status",
  ];

  return (
    <div className="bg-white">
      {/* Table Container */}
      <div className="grid grid-cols-5 gap-4 bg-customOrange text-white p-4 rounded-md">
        {ProductHeading.map((item, index) => (
          <div key={index} className="font-bold text-xl">
            {item}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="bg-white p-2">
        {ProductTableData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 bg-customGray text-black p-4 rounded-md font-semibold mt-2"
          >
            <div>{item.product}</div>
            <div>{item.qty}</div>
            <div>{item.date}</div>
            <div>{item.value}</div>
            <div className="text-customGreen">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
