import { useEffect } from "react";
import GreetUser from "../components/dashboard/dashboard/GreetUser";
import InformationCard from "../components/dashboard/dashboard/InformationCard";
import PerformanceCard from "../components/dashboard/dashboard/PerformanceCards";
import axios from "axios";
import useSWR from "swr"
import { useDashboardContext } from "../context/DashboardContext";
import { SimpleLoader } from "../components/ui";
import { getData } from "../utils/fetchData";

const Dashboard = () => {
  const {setUser} = useDashboardContext()
 

const {data, error} = useSWR("https://elinteerie1.pythonanywhere.com/api/student/", getData)
 useEffect(()=>{
  setUser(data)
 }, [data])

 if(!data){
  return <div className="min-h-full min-w-full flex items-center justify-center"><SimpleLoader /></div>
 }
  
  return (
    <div className="pb-4">
      <main className="px-4 relative  min-h-full">
        <GreetUser userData = {data}/>
        <PerformanceCard userData={data}/>
        <InformationCard userData={data}/>
      </main>
    </div>
  );
};

export default Dashboard;
