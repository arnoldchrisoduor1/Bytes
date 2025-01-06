import { LucideIcon } from "lucide-react";

interface ProductsRecentEventsProps {
    Icon: React.ComponentType<LucideIcon>;
    action: string;
    time: string;
    timeLabel: string;
    name: string;
}

const ProductRecentEvents: React.FC<ProductsRecentEventsProps> = ({ Icon, action, time, timeLabel, name }) => {
  return (
    <div className="grid grid-cols-3 gap-2 text-sidebarTop">
      <div className="font-semibold">{time} {timeLabel} Ago</div>
      <div className="flex flex-col items-center">
        <div className="text-white bg-sidebarTop p-1 rounded-full">
          <Icon />
        </div>
        <div className="h-10 w-1 bg-slate-300 my-2" />
      </div>
      <div>
        <p className="font-semibold">{action}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductRecentEvents;
