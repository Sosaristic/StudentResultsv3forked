import { useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useSWR from "swr"
import axios from "axios";
import SideNav from "./dashboard/layout/SideNav";
import DashboardHeader from "./dashboard/layout/DashboardHeader";
import { MdClose } from "react-icons/md";
import useClickAwayListener from "../hooks/useClickAway";
import { useDashboardContext } from "../context/DashboardContext";

export function Protected() {
  const sideBarRef = useRef(null);
  const {openSideNav, setOpenSideNav} = useDashboardContext()
  useClickAwayListener(sideBarRef, () => setOpenSideNav(false));
  const token = window.sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
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
console.log(data);

  return (
    <div className="bg-background min-h-screen relative flex ">
      {/* desktop side navigation */}
      <div className="w-2/12 hidden lg:block bg-v-dark-green px-4">
        <SideNav user={data}/>
      </div>

      <div className="w-full relative lg:w-10/12">
        {/* mobile side nav */}
        <div
          className={`container fixed top-0 bottom-0 left-0 lg:hidden z-[100] ${
            openSideNav ? "translate-x-0" : "translate-x-[-100%]"
          } transition-transform duration-500 ease-out`}
        >
          <div
            ref={sideBarRef}
            className="lg:hidden absolute min-h-screen w-[70%] md:w-[50%] translate-x-0 px-4 bg-dark-green"
          >
            <SideNav />
            <div
              onClick={() => setOpenSideNav(false)}
              className="absolute top-0 right-0 text-grey-white text-[3rem]"
            >
              <MdClose />
            </div>
          </div>
        </div>
        <DashboardHeader  />
        <Outlet />
      </div>
    </div>
  );
}
