import { twMerge } from "tailwind-merge";
import { LucideProps } from "lucide-react";

interface DashboardKPITabProps {
  Icon: React.ComponentType<LucideProps>;
  header: string;
  description: string;
  kpiSymbol?: string;
  price: number;
  priceLabel?: string;
  customClass?: string;
  priceClass?: string;
}

const DashboardKPITab: React.FC<DashboardKPITabProps> = ({
  Icon,
  header,
  description,
  kpiSymbol,
  price,
  priceLabel,
  customClass,
  priceClass,
}) => {
  return (
    <div className="bg-white p-4 rounded-md w-[150px] m-auto">
      <div className="flex flex-col">
        <div
          className={twMerge(
            `bg-customOrange p-2 rounded-full m-auto mt-2`,
            customClass
          )}
        >
          <Icon color="white" />
        </div>
        <div className="text-center">
          <h2 className="font-semibold mt-2 text-sidebarBottom">{header}</h2>
          <p className="text-xs mt-1 text-gray-400">{description}</p>
        </div>
        <div className="mt-3 text-center">
          <p className={twMerge(`font-extrabold text-xl`, priceClass)}>
            {kpiSymbol}
            {price}
            {priceLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardKPITab;
