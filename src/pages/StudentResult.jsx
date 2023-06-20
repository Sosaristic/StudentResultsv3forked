import axios from "axios";
import useSWR from "swr";
import { useAuthentication } from "../hooks/useAuthentication";
import { SimpleLoader } from "../components/ui";
import ResultTable from "../components/dashboard/results/ResultTable";

export default function StudentResult() {
  const { getToken } = useAuthentication();
  const token = getToken();

  async function fetchData() {
    try {
      const response = await axios.get("https://elinteerie1.pythonanywhere.com/api/courses/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response.data;
    } catch (error) {}
  }

  const { data, error } = useSWR("https://elinteerie1.pythonanywhere.com/api/courses/", fetchData);
  if (error) {
    return <div>Error trying to get student results</div>;
  }
  if (!data) {
    return (
      <div className="min-h-full min-w-full flex items-center justify-center">
        <SimpleLoader />
      </div>
    );
  }

  const {
    student_grade: { total_grade_point, total_course_units, cgpa },
  } = data || {};
  const cgpaCalculator = (gp) => {
    const CGPA =
      gp >= 4.5
        ? "First Class"
        : gp >= 3.5 && gp < 4.49
        ? "2nd Class Upper"
        : gp >= 2.40 && gp < 3.50
        ? "2nd Class Lower"
         : gp >= 1.50 && gp < 2.40
        ? "3rd Class"
        : "pass";
        return CGPA
  };
  return (
    <div className="p-2 md:px-6 overflow-hidden">
      <h2 className="font-righteous mt-4 text-[2.5rem] leading-7">Results</h2>

      <div className="flex flex-col sm:flex-row w-fit text-grey-white mt-6 gap-2">
        <p className="flex gap-2 items-center font-jost shadow-dashboard-card bg-dark-green p-1">
          Session: <span className=" font-[500]">2022</span>
        </p>
        <p className="flex  gap-2 items-center font-jost shadow-dashboard-card bg-dark-green p-1">
          Semester: <span className=" font-[500]">First</span>
        </p>
        <p className="flex font-[500] gap-2 items-center font-jost shadow-dashboard-card bg-dark-green p-1">
          Courses: <span className="text-xl font-[500]">10</span>
        </p>
      </div>

      <ResultTable resultData={data} />
      <div className="flex flex-col text-grey-white sm:flex-row items-center justify-center gap-4 mt-2">
        <p className="bg-dark-green p-2 font-semibold">
          Total Units: <span className="font-bold">{total_course_units}</span>
        </p>
        <p className="bg-dark-green p-2 font-semibold">
          Total Points: <span className="font-bold">{total_grade_point}</span>
        </p>
        <div className="flex bg-dark-green gap-2 items-center p-2 font-semibold">
          GP:{" "}
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold">{cgpa}</span>
            <span className="text-xs">{cgpaCalculator(cgpa)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
