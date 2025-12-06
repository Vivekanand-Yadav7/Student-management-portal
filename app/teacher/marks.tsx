"use client";
import { useEffect, useState } from "react";

export default function TeacherMarks() {
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState({});
  
  useEffect(() => {
    fetch("/api/students").then(r => r.json()).then(setStudents);
  }, []);

  const handleMarksChange = (studentId: string, value: number) => {
    setMarks({ ...marks, [studentId]: value });
  };

  const handleSubmit = async () => {
    for (const studentId in marks) {
      await fetch("/api/teachers/marks", {
        method: "POST",
        body: JSON.stringify({ studentId, subject, marks: Number(marks[studentId]) }),
      });
    }
    alert("Marks submitted successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Enter Marks</h1>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        className="mb-4 p-3 border rounded-lg w-full"
      />

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Student</th>
              <th className="border px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => (
              <tr key={student._id}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    className="p-2 border rounded w-full"
                    onChange={e => handleMarksChange(student._id, Number(e.target.value))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
      >
        Submit Marks
      </button>
    </div>
  );
}
