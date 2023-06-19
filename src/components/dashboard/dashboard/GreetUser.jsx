import { useAppContext } from "../../../context/AppContext";

export default function GreetUser() {
  const {userData} = useAppContext()


  return (
    <div className="mt-4 px-4">
      <h2 className="font-righteous text-[2.5rem] leading-7">Dashboard</h2>
      <p className="font-jost text-sm font-bold text-dark-green">Welcome back {userData?.user.first_name || "Student"}</p>
    </div>
  );
}
