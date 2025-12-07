"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TeacherMarks() {
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState({});

  useEffect(() => {
    fetch("/api/students")
      .then((r) => r.json())
      .then(setStudents);
  }, []);

  const handleMarksChange = (studentId: string, value: number) => {
    setMarks({ ...marks, [studentId]: value });
  };

  const handleSubmit = async () => {
    if (!subject.trim()) {
      alert("Please enter subject!");
      return;
    }

    for (const studentId in marks) {
      await fetch("/api/teachers/marks", {
        method: "POST",
        body: JSON.stringify({
          studentId,
          subject,
          marks: Number(marks[studentId]),
        }),
      });
    }

    alert("Marks submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">

      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Enter Student Marks
        </h1>
      </div>

      {/* Quote */}
      <p className="text-lg italic text-gray-800 mb-6 font-medium">
        "The best teachers show you where to look, but don’t tell you what to see."
      </p>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200">

        {/* Subject Input */}
        <div className="mb-6">
          <label className="block text-gray-900 font-semibold mb-2 text-lg">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject name..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-3 border rounded-lg w-full outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
          <table className="w-full text-left">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th className="px-4 py-3 border">Student Name</th>
                <th className="px-4 py-3 border">Marks</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student: any, idx) => (
                <tr
                  key={student._id}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-3 border text-gray-900 font-medium">
                    {student.name}
                  </td>

                  <td className="px-4 py-3 border">
                    <input
                      type="number"
                      className="p-2 border rounded w-full outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                      onChange={(e) =>
                        handleMarksChange(student._id, Number(e.target.value))
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="mt-6 px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl shadow-lg transition font-semibold"
          >
            Submit Marks
          </button>
        </div>
      </div>

      {/* Back Link */}
      <Link
        href="/teacher"
        className="inline-block mt-6 text-indigo-800 hover:underline font-semibold"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
