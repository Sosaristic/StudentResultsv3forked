import React from "react";
import { useAppContext } from "../../../context/AppContext";

export default function InformationCard() {
    const {userData} = useAppContext()
  
  return (
    <div className="w-full lg:w-[60%] border p-2 relative bg-dark-green font-jost mt-4 text-grey-white shadow-dashboard-card rounded-md">
      <h2 className="text-[1.5rem] font-[800]">My Information</h2>
      <hr className="my-4"/>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-bold text-[1.2rem]">Name:</td>
            <td className="font-[500] capitalize">{userData?.user.last_name} {userData?.user.first_name}</td>
          </tr>
          <tr>
            <td className="font-bold text-[1.2rem]">Gender:</td>
            <td className="font-[500]">Female</td>
          </tr>
          <tr>
            <td className="font-bold text-[1.2rem]">Email:</td>
            <td className="font-[500]">{userData?.user.email}</td>
          </tr>
          <tr>
            <td className="font-bold text-[1.2rem]">Department:</td>
            <td className="font-[500]">{userData?.student_dept.name}</td>
          </tr>

          <tr>
            <td className="font-bold text-[1.2rem]">Level:</td>
            <td className="font-[500]">{userData?.level}lvl</td>
          </tr>
          <tr>
            <td className="font-bold text-[1.2rem]">Faculty:</td>
            <td className="font-[500]">{userData?.student_faculty.name}</td>
          </tr>
          <tr>
            <td className="font-bold text-[1.2rem]">Reg No:</td>
            <td className="font-[500]">{userData?.student_reg}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
