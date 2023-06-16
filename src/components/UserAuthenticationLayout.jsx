import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { img1 } from "../assets";
export function UserAuthenticationLayout() {
  const { pathname } = useLocation();

  const headerText = (pathname) => {
    if (pathname == "/login") return "Student Portal Login";
    if (pathname == "/reset-password") return "Student Password Reset";
    if (pathname == "/register") return "Student Registration";
  };
  return (
    <div className="flex flex-col h-full bg-background">
      <nav className="w-full bg-dark-green sm:py-5 py-5 px-4">
        <div className="flex max-w-6xl mx-auto items-center gap-4">
          <img src={img1} alt="" className="h-16" />{" "}
          <h1 className="text-xl text-white font-righteous">
            Federal University of Technology Owerri
          </h1>
        </div>
      </nav>
      <main className="w-full p-4 h-full flex flex-col items-center text-zinc-700 relative overflow-x-hidden">
        <h2 className="text-xl font-medium justify-self-start">FUTO Students Result Portal</h2>
        <div className="w-[100%] md:w-[60%] lg:w-[50%] bg-white rounded-md shadow-xl mt-2 px-10 py-5 flex flex-col gap-4">
          <div className="p-5 bg-dark-green rounded-full mx-auto w-max h-max ">
            <AcademicCapIcon className="h-10 text-white" />
          </div>
          <p className="mx-auto my-2 text-lg font-[500] mt-4">{headerText(pathname)}</p>
          <Outlet />
          <p className="mx-auto text-sm text-zinc-500">Powered by Ulpha Deep Labs</p>
        </div>
      </main>
    </div>
  );
}
