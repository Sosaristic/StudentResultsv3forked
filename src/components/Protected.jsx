import { Outlet, Navigate } from "react-router-dom";
import DesktopSideNav from "./dashboard/layout/DesktopSideNav";

export function Protected() {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="bg-background min-h-screen relative flex ">
      <div className="w-2/12 hidden lg:block bg-dark-green rounded-tr-2xl rounded-br-2xl px-4">
        <DesktopSideNav />
      </div>

      <div className="w-10/12 lg:full">
        <Outlet />
      </div>
    </div>
  );
}
