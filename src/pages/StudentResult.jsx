import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useAuthentication } from "../hooks/useAuthentication";
import { SimpleLoader } from "../components/ui";
import ResultTable from "../components/dashboard/results/ResultTable";
import ResultFilter from "../components/dashboard/results/ResultFilter";
import { cgpaCalculator } from "../utils/helperFunctions";

export default function StudentResult() {
  const { getToken } = useAuthentication();
  const [studentResult, setStudentResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = getToken();

  const { student_grade } = studentResult || {};

  console.log(studentResult);

  return (
    <div className="p-2 md:px-6 overflow-hidden min-h-screen">
      <h2 className="font-righteous mt-4 text-[2.5rem] leading-7">Results</h2>

      <div className="mt-2">
        <ResultFilter setStudentResult={setStudentResult} setLoading={setLoading} />
      </div>
      {!studentResult && !loading && (
        <div className="min-h-full min-w-full mt-8 font-inter flex items-center justify-center">
          <p className="text-center">Select Session and semester to get the result</p>
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
              <span className="font-[900]">{student_grade?.courses_offered.length}</span>
            </p>
            <p className="bg-dark-green p-2 font-semibold basis-[45%] md:basis-[23%] flex items-center flex-col md:flex-row gap-2">
              <span>Total Units: </span>
              <span className="font-[900]">{student_grade?.total_course_units}</span>
            </p>
            <p className="bg-dark-green p-2 font-semibold basis-[45%] md:basis-[23%] flex items-center flex-col md:flex-row gap-2">
              <span>Total Points: </span>
              <span className="font-[900]">{student_grade?.total_grade_point}</span>
            </p>
            <div className="flex flex-col md:flex-row bg-dark-green gap-2 items-center p-2 font-semibold basis-[45%] md:basis-[23%]">
              
              
                <span className="font-[900]">GP: {student_grade?.cgpa}</span>
                <span className="text-xs">{cgpaCalculator(student_grade?.cgpa)}</span>
          
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
