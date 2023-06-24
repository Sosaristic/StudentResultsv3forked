export default function ResultTable({ resultData: { course_items } }) {
  function calculateGrade(totalScore) {
    const grade =
      totalScore >= 70 && totalScore <= 100
        ? "A"
        : totalScore >= 60 && totalScore < 70
        ? "B"
        : totalScore >= 50 && totalScore < 60
        ? "C"
        : totalScore >= 45 && totalScore < 50
        ? "D"
        : totalScore >= 40 && totalScore < 45
        ? "E"
        : "F";
    return grade;
  }
  return (
    <div className="mt-2 text-center overflow-auto relative">
      <table className="table-auto w-full text-md mx-auto border-spacing-3 border-2 border-dark-green">
        <thead className="bg-dark-green text-grey-white">
          <tr>
            <th className="p-1">No</th>
            <th className="p-1">Course</th>
            <th className="p-1">Code</th>
            <th className="p-1">Units</th>
            <th className="p-1">CA</th>
            <th className="p-1">Exam</th>
            <th className="p-1">Total</th>
            <th className="p-1">Grade</th>
          </tr>
        </thead>
        <tbody className="text-dark-green font-[500]">
          {course_items?.map((item, index) => {
            const {
              student_course_ca,
              student_course_exam_score,
              total_score,
              student_grade,
              course: {name, course_code, course_units}
            } = item;
            return (
              <tr key={index} className="border border-v-dark-green">
                <td className="p-1">{index + 1}</td>
                <td className="p-1">{name}</td>
                <td className="p-1">{course_code}</td>
                <td className="p-1">{course_units}</td>

                <td className="p-1">{student_course_ca}</td>
                <td className="p-1">{student_course_exam_score}</td>
                <td className="p-1">{total_score}</td>
                <td className="p-1">{student_grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
