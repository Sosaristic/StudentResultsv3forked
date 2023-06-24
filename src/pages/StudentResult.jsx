import { useState } from "react";

import { SimpleLoader } from "../components/ui";
import ResultTable from "../components/dashboard/results/ResultTable";
import ResultFilter from "../components/dashboard/results/ResultFilter";
import { classOfDegreeCalculator } from "../utils/helperFunctions";

export default function StudentResult() {
  const [studentResult, setStudentResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Select Session and semester to get the result")

  return (
    <div className="p-2 md:px-6 overflow-hidden min-h-screen">
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
        <div>
          <ResultTable resultData={studentResult} />
          <div className="flex flex-wrap justify-center text-grey-white gap-4 mt-2">
            <p className="bg-dark-green p-2 font-semibold basis-[45%] md:basis-[23%] flex items-center flex-col md:flex-row gap-2">
              <span> Courses:</span>{" "}
              <span className="font-[900]">{studentResult.course_items.length}</span>
            </p>
            <p className="bg-dark-green p-2 font-semibold basis-[45%] md:basis-[23%] flex items-center flex-col md:flex-row gap-2">
              <span>Total Units: </span>
              <span className="font-[900]">{studentResult.student_grade.total_course_units}</span>
            </p>
            <p className="bg-dark-green p-2 font-semibold basis-[45%] md:basis-[23%] flex items-center flex-col md:flex-row gap-2">
              <span>Total Points: </span>
              <span className="font-[900]">{studentResult.student_grade.total_course_units}</span>
            </p>
            <div className="flex flex-col md:flex-row bg-dark-green gap-2 items-center p-2 font-semibold basis-[45%] md:basis-[23%]">
              <span className="font-[900]">GP: {studentResult.student_grade.cgpa}</span>
              <span className="text-xs">
                {classOfDegreeCalculator(studentResult.student_grade.cgpa)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
