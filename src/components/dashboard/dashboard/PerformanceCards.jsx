import { useAppContext } from "../../../context/AppContext";

import Graduation from "../../../assets/svg/graduation.svg";
import CarryOver from "../../../assets/svg/carry-over.svg"
import Time from "../../../assets/svg/time.svg"

export default function PerformanceCard() {
  const {userData} = useAppContext()
  return (
    <div className="flex flex-col px-4 gap-2 md:flex-row md:items-center font-inter justify-between">
      <div className="flex justify-around border h-[8rem] max-h-[8rem] bg-dark-green p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div>
          <img src={Graduation} alt="" height={100} width={100} />
        </div>
        <div className="px-4 flex flex-col text-lg font-bold items-center justify-evenly">
            <p>CGPA</p>
            <p className="text-[2rem]">{userData?.cgpa}</p>
        </div>
      </div>

      <div className="flex border min-h-[8rem] h-[8rem] max-h-[8rem] bg-dark-green p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div>
          <img src={CarryOver} alt="" height={100} width={100} />
        </div>
        <div className="px-4 flex flex-col text-lg font-bold items-center justify-evenly">
            <p className="text-center">Carry Overs</p>
            <p className="text-[2rem]">{userData?.carryovers}</p>
        </div>
      </div>

      <div className="flex border min-h-[4rem] h-[8rem] max-h-[8rem] bg-dark-green p-4 text-grey-white shadow-dashboard-card rounded-md">
        <div>
          <img src={Time} alt="" height={100} width={100} />
        </div>
        <div className="px-4 flex flex-col text-lg font-bold items-center justify-evenly">
            <p className="text-center">Current Level</p>
            <p className="text-[2rem]">{userData?.level}</p>
        </div>
      </div>

     
    </div>
  );
}
