import { useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";
import SideNav from "./dashboard/layout/SideNav";
import DashboardHeader from "./dashboard/layout/DashboardHeader";
import {MdClose} from "react-icons/md"
import { useAppContext } from "../context/AppContext";
import { useLinkClickHandler } from "react-router-dom";
import useClickAwayListener from "../hooks/useClickAway";

export function Protected() {
  const sideBarRef = useRef(null)
  const {openSideNav, setOpenSideNav} = useAppContext()
  useClickAwayListener(sideBarRef, ()=>setOpenSideNav(false))
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="bg-background min-h-screen relative flex ">
      <div className="w-2/12 hidden lg:block bg-v-dark-green px-4">
        <SideNav />
      </div>

      <div className="w-full lg:w-10/12">
        <div className={`container fixed top-0 bottom-0 left-0 lg:hidden ${openSideNav? "translate-x-0" : "translate-x-[-100%]"} transition-transform duration-500 ease-out`}>
        <div ref={sideBarRef} className="lg:hidden absolute min-h-screen w-[70%] translate-x-0 px-4 bg-dark-green"><SideNav />
        <div onClick={()=>setOpenSideNav(false)} className="absolute top-0 right-0 text-grey-white text-[3rem]"><MdClose /></div>
        </div>
        </div>
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
