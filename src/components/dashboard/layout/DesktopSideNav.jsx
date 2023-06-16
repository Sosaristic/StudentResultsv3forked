import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { Avatar } from "../../ui";

import { MdDashboard, MdLogout } from "react-icons/md";
import { FaUser, FaEnvelope, FaBell } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const desktopSideBarLinks = [
  { id: 1, name: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  { id: 2, name: "Profile", link: "/dashboard/profile", icon: <FaUser /> },
  { id: 3, name: "messages", link: "/dashboard/messages", icon: <FaEnvelope /> },
  { id: 4, name: "Notifications", link: "/dashboard/notifications", icon: <FaBell /> },
  { id: 5, name: "Student result", link: "/dashboard/student-result", icon: <HiDocumentText /> },
];


const SideNavLink = ({ name, link, icon }) => {
  return (
    <NavLink
      to={link}
      end={true}
      className={({ isActive }) =>
        isActive
          ? "flex relative items-center gap-2 text-dark-green text-[1rem] p-2 capitalize  border border-grey-white bg-background shadow-md rounded-2xl shadow-gray-500 font-[500]"
          : "flex relative items-center gap-2 text-grey-white text-[1rem] p-2 capitalize font-[500]"
      }
    >
      <span className="text-[1.5rem]">{icon}</span>
      {name}
    </NavLink>
  );
};

export default function DesktopSideNav() {
  const {signOut} = useAuthentication()
  return (
    <section>
      <div className="flex flex-col items-center text-grey-white text-[.9rem] mt-4 font-jost">
        <Avatar />
        <p className="text-[1.2rem] font-bold">Marcus Rashford</p>
        <p>Electronic engineering</p>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        {desktopSideBarLinks.map((item) => (
          <SideNavLink key={item.id} {...item} />
        ))}
      </div>

      <button type="button" className="w-full mt-[6rem] text-[.8rem] p-2 bg-background text-dark-green flex items-center justify-center rounded-2xl"
      onClick={()=>signOut()}
      >
        <span className="text-[1.4rem]">
          <MdLogout />
        </span>{" "}
        Log Out
      </button>
    </section>
  );
}
