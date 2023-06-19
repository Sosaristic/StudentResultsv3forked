import { useEffect } from "react";
import GreetUser from "../components/dashboard/dashboard/GreetUser";
import InformationCard from "../components/dashboard/dashboard/InformationCard";
import PerformanceCard from "../components/dashboard/dashboard/PerformanceCards";
import axios from "axios";
import useSWR from "swr"
import { useDashboardContext } from "../context/DashboardContext";
import { SimpleLoader } from "../components/ui";


const Dashboard = () => {
  const {setUser} = useDashboardContext()
  const token = window.sessionStorage.getItem("token")
  async function fetchData(){
        try {
         const response = await axios.get("https://elinteerie1.pythonanywhere.com/api/student/", {
            headers: {
              Authorization: `Token ${token}`
            }
          })
          return response.data
        } catch (error) {
          
        }
      }

const {data, error} = useSWR("https://elinteerie1.pythonanywhere.com/api/student/", fetchData)
 useEffect(()=>{
  setUser(data)
 }, [data])

 if(!data){
  return <div className="min-h-full min-w-full flex items-center justify-center"><SimpleLoader /></div>
 }
  
console.log(data)
  return (
    <div>
      <main className="px-4 relative  min-h-full">
        <GreetUser userData = {data}/>
        <PerformanceCard userData={data}/>
        <InformationCard userData={data}/>
      </main>
    </div>
  );
};

export default Dashboard;
