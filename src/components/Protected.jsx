import { Outlet, Navigate } from "react-router-dom";
import DesktopSideNav from "./dashboard/layout/DesktopSideNav";
import DashboardHeader from "./dashboard/layout/DashboardHeader";

export function Protected() {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="bg-background min-h-screen relative flex ">
      <div className="w-2/12 hidden lg:block bg-v-dark-green px-4">
        <DesktopSideNav />
      </div>

      <div className="w-full lg:w-10/12">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
