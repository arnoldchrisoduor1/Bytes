import { twMerge } from "tailwind-merge";

interface UpcomingCardProps {
  label: string;
  amount: number;
  colorClass: string;
}

const UpcomingPaymentsCard: React.FC<UpcomingCardProps> = ({ label, amount, colorClass }) => {
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className={twMerge(`h-2 w-2 rounded-full`, colorClass)} />
          <p className="text-gray-400 font-semibold">{label}</p>
        </div>
        <div className="bg-customOrange/10 p-1 rounded-xl">
          <p className="font-bold text-customOrange">${amount}</p>
        </div>
      </div>
    </div>
  )
}

const DashboardUpcomingCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div>
        <h1 className="font-bold text-2xl text-sidebarBottom">Upcoming Payments</h1>
      </div>
      <div className="mt-2">
      <UpcomingPaymentsCard label="Easy Pay Way" colorClass="bg-customGreen" amount={82258.23} />

      <UpcomingPaymentsCard label="Payonner" colorClass="bg-customYellow" amount={61486.69} />

      <UpcomingPaymentsCard label="FastSpring" colorClass="bg-red-500" amount={4210.38} />
      </div>

      <div className="mt-2">
        <p className="text-customOrange font-semibold">More</p> 
      </div>
    </div>
  )
}

export default DashboardUpcomingCard