
import GreetUser from "../components/dashboard/dashboard/GreetUser";
import InformationCard from "../components/dashboard/dashboard/InformationCard";
import PerformanceCard from "../components/dashboard/dashboard/PerformanceCards";

const Dashboard = () => {
  

  return (
    <div>
      <main className="px-4 relative  min-h-full">
       <GreetUser />
       <PerformanceCard />
       <InformationCard />
      </main>
    </div>
  );
};

export default Dashboard;
