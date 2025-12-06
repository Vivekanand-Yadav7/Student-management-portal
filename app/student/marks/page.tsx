"use client";

import { useEffect, useState } from "react";

type MarksItem = {
  _id: string;
  studentId?: { name?: string } | string; // optional, safe for API data
  subject?: string;
  marks?: number;
};

export default function Page() {
  const [marks, setMarks] = useState<MarksItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarks() {
      try {
        const res = await fetch("/api/marks");
        const data = await res.json();
        setMarks(data);
      } catch (err) {
        console.error("Failed to fetch marks", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMarks();
  }, []);

  if (loading) return <p className="p-8 text-gray-700">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Marks</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Student</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Marks</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {marks.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-3 px-6 text-center text-gray-500">
                  No marks available
                </td>
              </tr>
            ) : (
              marks.map((item) => {
                const studentName =
                  typeof item.studentId === "object"
                    ? item.studentId?.name
                    : item.studentId;

                return (
                  <tr key={item._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{studentName || "N/A"}</td>
                    <td className="py-3 px-6">{item.subject || "N/A"}</td>
                    <td className="py-3 px-6">{item.marks ?? "N/A"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
