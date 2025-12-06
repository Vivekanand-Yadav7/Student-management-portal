"use client";
import { useEffect, useState } from "react";

export default function TeacherAttendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    fetch("/api/students").then(r => r.json()).then(setStudents);
  }, []);

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const handleSubmit = async () => {
    for (const studentId in attendance) {
      await fetch("/api/teachers/attendance", {
        method: "POST",
        body: JSON.stringify({ studentId, status: attendance[studentId], date: new Date() }),
      });
    }
    alert("Attendance submitted!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Student</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => (
              <tr key={student._id}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  <select
                    className="p-2 border rounded w-full"
                    onChange={e => handleAttendanceChange(student._id, e.target.value)}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Submit Attendance
      </button>
    </div>
  );
}
