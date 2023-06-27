import { useState } from "react";

import { SimpleLoader } from "../components/ui";
import ResultTable from "../components/dashboard/results/ResultTable";
import ResultFilter from "../components/dashboard/results/ResultFilter";
import { classOfDegreeCalculator } from "../utils/helperFunctions";

export default function StudentResult() {
  const [studentResult, setStudentResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Select Session and semester to get the result");
  console.log(studentResult);
  return (
    <section className="p-2 md:px-6 overflow-hidden min-h-full">
      <h2 className="font-righteous mt-4 text-[2.5rem] leading-7">Results</h2>

      <div className="mt-2">
        <ResultFilter setStudentResult={setStudentResult} setLoading={setLoading} />
      </div>
      {!studentResult && !loading && (
        <div className="min-h-full min-w-full mt-8 font-inter flex items-center justify-center">
          <p className="text-center">{message}</p>
        </div>
      )}
      {!studentResult && loading && (
        <div className="flex items-center justify-center mt-8">
          <SimpleLoader />
        </div>
      )}
      {studentResult && (
        <section>
          <div className="flex mt-4 gap-2 text-grey-white font-jost mb-1">
            <p className="bg-dark-green py-1 px-2 rounded-sm">
              Session: <span className="font-[600]">{studentResult?.semester.session}</span>
            </p>
            <p className="bg-dark-green py-1 px-2 rounded-sm">
              Session: <span className="font-[600]">{studentResult?.semester.semester_name}</span>
            </p>
          </div>
          <ResultTable resultData={studentResult} />
       
          <div className="overflow-auto relative mt-2">
          <table className="table-auto w-full text-md mx-auto border-spacing-3 border-2 border-dark-green">
            <thead className="bg-dark-green text-grey-white">
              <tr>
                <th className="px-4 py-2">Courses</th>
                <th className="px-4 py-2">Total Units</th>
                <th className="px-4 py-2">Total Points</th>
                <th className="px-4 py-2">GPA</th>
                <th className="px-4 py-2">Class Of Degree</th>
              </tr>
            </thead>
            <tbody className="text-center font-bold text-dark-green text-lg">
              <tr>
                <td className="px-4 py-2 whitespace-nowrap w-auto">{studentResult.course_items.length}</td>
                <td className="px-4 py-2 whitespace-nowrap w-auto">{studentResult.semester_gpa.total_grade_points}</td>
                <td className="px-4 py-2 whitespace-nowrap w-auto">{studentResult.semester_gpa.total_course_units}</td>
                <td className="px-4 py-2 whitespace-nowrap w-auto">{studentResult.semester_gpa.gpa}</td>
                <td className="px-4 py-2 whitespace-nowrap w-auto"> {classOfDegreeCalculator(studentResult.semester_gpa.gpa)}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>
      )}
    </section>
  );
}
