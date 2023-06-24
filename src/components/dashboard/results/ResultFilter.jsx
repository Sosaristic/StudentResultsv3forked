import React, { useEffect, useState } from "react";
import useSWr from "swr";
import { Select } from "../../ui";
import { getData, getResults } from "../../../utils/fetchData";

const semesters = [
  { id: 1, value: "first", name: "first" },
  { id: 2, value: "second", name: "second" },
];

export default function ResultFilter({ setStudentResult, setLoading,  }) {
  const [sessionDropdownValues, setSessionDropdownValues] = useState([]);
  const [sessionDropdownData, setsessionDropdownData] = useState([]);
  const [semesterValue, setSemesterValue] = useState(semesters[0]);

  const { data, error } = useSWr("https://elinteerie1.pythonanywhere.com/api/student/", getData);

  useEffect(() => {
    if (data !== undefined) {
      const { student_reg } = data;
      let studentEntryYear = +student_reg?.slice(0, 4);
      const currentYear = new Date().getFullYear();
      let dropdownYears = [];
      let id = 1;
      while (studentEntryYear <= currentYear) {
        const value = `${studentEntryYear}/${studentEntryYear + 1}`;
        dropdownYears.push({ id, value, name: value });
        studentEntryYear++;
        id++;
      }

      setsessionDropdownData(dropdownYears);
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionDropdownValues.value) {
      setLoading(true)
      setStudentResult(null)
      const query = `session_name=${sessionDropdownValues.value}&semester_name=${semesterValue.value}`;
      getResults(query)
        .then((response) => {
          setStudentResult(response)
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          setStudentResult(null)
        });
    }
  };

  return (
    <form className="z-[100] flex gap-1 flex-wrap" onSubmit={handleSubmit}>
      <div>
        <Select
          listData={sessionDropdownData}
          label="Session"
          name="session"
          onChange={(e) => setSessionDropdownValues(e)}
          value={sessionDropdownValues}
          alternateValue="Session"
        />
      </div>
      <div>
        <Select
          listData={semesters}
          label="semester"
          name="semester"
          value={semesterValue}
          onChange={(e) => setSemesterValue(e)}
          alternateValue={"Semester"}
        />
      </div>
      <button className="bg-dark-green hover:bg-v-dark-green text-grey-white rounded-sm px-2">
        Submit
      </button>
    </form>
  );
}
