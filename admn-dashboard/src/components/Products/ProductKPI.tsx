import { LucideProps } from "lucide-react";

interface ProductKPIprops  {
    Icon: React.ComponentType<LucideProps>;
    heading: string;
    amount: number;
    currency: string;
}

const ProductKPI: React.FC<ProductKPIprops> = ({ Icon, heading, amount, currency }) => {
  return (
    <div className="flex gap-5 items-center text-white bg-customOrange p-2 rounded-xl">
      <div className="bg-white/30 p-2 rounded-md">
        <Icon className="text-white"/>
      </div>
      <div>
        <div>
          <p className="font-bold">{heading}</p>
        </div>
        <div className="bg-white/80 px-1 inline-block rounded-md">
          <p className="font-bold text-customBlue">{amount} {currency}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductKPI;
