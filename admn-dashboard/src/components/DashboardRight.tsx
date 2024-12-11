import { ArrowUp } from "lucide-react";
import { MoveDown } from "lucide-react";
import { ArrowBigRight } from "lucide-react";

// Define the type for the data
interface InfoCardProps {
  icon: React.ElementType; // Type for the icon component
  label: string;
  amount: string;
  color?: string;
}

// InfoCard component
const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, label, amount, color }) => {
  return (
    <div className="flex flex-row justify-between text-white mt-4">
      <div className="flex flex-row gap-2">
        <div className="bg-white flex items-center justify-center rounded-md">
            <Icon className="h-[15px]" color={color} />
        </div>
        <p>{label}</p>
      </div>
      <div className="font-semibold">{amount}</div>
    </div>
  );
};

const DashboardRight = () => {
  return (
    <div className="flex flex-col w-full p-4 bg-customOrange rounded-lg">
      <div>
        <h1 className="font-bold text-3xl text-white">$ 9.470</h1>
        <p className="text-white/90">Active Balance</p>
      </div>

      {/* Use the InfoCard component */}
      <div className="flex flex-col mt-4">
        <InfoCard icon={ArrowUp} color = '#2aad93' label="Incomes" amount="$ 1699.0" />
        <InfoCard icon={MoveDown} color ="red" label="Expenses" amount="$ -799.0" />
        <InfoCard icon={MoveDown} color="red" label="Taxes" amount="$ -199.0" />
      </div>

      <div className="mt-8 flex flex-row gap-2 text-customOrange bg-white w-[70%] m-auto p-2 rounded-lg">
        <p className="font-bold">Add Virtual Card</p>
        <ArrowBigRight />
      </div>
    </div>
  );
};

export default DashboardRight;
