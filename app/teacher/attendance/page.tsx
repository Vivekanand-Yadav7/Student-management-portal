"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TeacherAttendance() {
  const [students, setStudents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/students")
      .then((r) => r.json())
      .then(setStudents)
      .catch((err) => console.error("Failed to load students", err));
  }, []);

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendance((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = async () => {
    try {
      for (const studentId in attendance) {
        await fetch("/api/teachers/attendance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId,
            status: attendance[studentId],
            date: new Date().toISOString(),
          }),
        });
      }

      alert("Attendance submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit attendance!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 p-10">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-10 border border-white/30">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Mark Attendance
          </h1>

          <Link
            href="/teacher"
            className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-xl shadow-md transition"
          >
            ⬅ Back to Dashboard
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6 text-left text-lg">Student</th>
                <th className="py-3 px-6 text-left text-lg">Status</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {students.map((student: any, index) => (
                <tr
                  key={student._id}
                  className={`border-b hover:bg-blue-50 transition ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6 font-medium text-gray-800">
                    {student.name}
                  </td>

                  <td className="py-3 px-6">
                    <select
                      className="p-3 border border-gray-300 rounded-lg w-full text-gray-700 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                      onChange={(e) =>
                        handleAttendanceChange(student._id, e.target.value)
                      }
                      defaultValue=""
                    >
                      <option value="">Select Status</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-8 w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg transition text-lg"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
}
