import { useDashboardContext } from "../../../context/DashboardContext";
import Graduation from "../../../assets/svg/graduation.svg";
import CarryOver from "../../../assets/svg/carry-over.svg"
import Time from "../../../assets/svg/time.svg"

export default function PerformanceCard() {
  const {user} = useDashboardContext()

  return (
    <div className="flex flex-col px-4 gap-2 md:flex-row md:items-center font-inter justify-between">
      <div className="flex justify-around border h-[8rem] max-h-[8rem] bg-[#059669] p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div className="w-1/2 flex-1 flex items-center justify-center">
          <img src={Graduation} alt="" height={100} width={100} />
        </div>
        <div className="px-4 w-1/2 flex-1 flex flex-col text-lg font-bold items-center justify-evenly">
            <p>CGPA</p>
            <p className="text-[2rem]">{user?.cgpa}</p>
        </div>
      </div>

      <div className="flex border min-h-[8rem] h-[8rem] max-h-[8rem] bg-[#059669] p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div className="w-1/2 flex-1 flex items-center justify-center">
          <img src={CarryOver} alt="" height={100} width={100} />
        </div>
        <div className="px-4 w-1/2 flex-1 flex flex-col text-lg font-bold items-center justify-evenly">
            <p className="text-center">Carry Overs</p>
            <p className="text-[2rem]">{user?.carryovers}</p>
        </div>
      </div>

      <div className="flex border min-h-[4rem] h-[8rem] max-h-[8rem] bg-[#059669] p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div className="w-1/2 flex-1 flex items-center justify-center">
          <img src={Time} alt="" height={100} width={100} />
        </div>
        <div className="px-4 w-1/2 flex-1 flex flex-col text-lg font-bold items-center justify-evenly">
            <p className="text-center">Current Level</p>
            <p className="text-[2rem]">{user?.level}</p>
        </div>
      </div>

     
    </div>
  );
}
