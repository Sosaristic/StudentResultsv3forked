import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useDashboardContext } from "../../../context/DashboardContext";
import { Avatar, SimpleLoader } from "../../ui";

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
  const { setOpenSideNav } = useDashboardContext();
  return (
    <NavLink
      to={link}
      end={true}
      onClick={() => setOpenSideNav(false)}
      className={({ isActive }) =>
        isActive
          ? "flex relative gap-2 text-dark-green text-[1rem] p-2 capitalize  border border-grey-white bg-background shadow-md rounded-2xl shadow-gray-500 font-[500]"
          : "flex relative hover:bg-v-dark-green items-center gap-2 text-grey-white text-[1rem] p-2 capitalize font-[500] rounded-2xl"
      }
    >
      <span className="text-[1.5rem]">{icon}</span>
      {name}
    </NavLink>
  );
};

export default function SideNav() {
  const { signOut } = useAuthentication();
  const { user } = useDashboardContext();

  return (
    <section className="min-h-screen relative flex flex-col">
      {user?.photo ? (
        <div className="flex flex-col items-center text-grey-white text-[.9rem] mt-4 font-jost">
          <Avatar imgUrl={user?.photo} />
          <p className="text-[1.2rem] font-bold">
            {user?.user.last_name || "Student"} {user?.user.first_name}
          </p>
          <p>{user?.student_dept.name}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-4">
          <SimpleLoader />
        </div>
      )}

      <div className="mt-8 flex flex-col gap-6">
        {desktopSideBarLinks.map((item) => (
          <SideNavLink key={item.id} {...item} />
        ))}
      </div>

      <button
        type="button"
        className="w-full mt-auto mb-[5rem] lg:mb-4 text-[1rem] font-bold p-2 text-grey-white flex items-center justify-center gap-4 rounded-2xl border border-grey-white hover:bg-grey-white hover:text-v-dark-green active:bg-v-dark-green active:text-grey-white"
        onClick={() => signOut()}
      >
        <span className="text-[1.4rem]">
          <MdLogout />
        </span>{" "}
        Log Out
      </button>
    </section>
  );
}
