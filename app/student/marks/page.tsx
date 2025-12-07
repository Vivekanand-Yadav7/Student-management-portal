"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type MarksItem = {
  _id: string;
  studentId?: { _id?: string; name?: string } | string;
  subject?: string;
  marks?: number;
};

export default function Page() {
  const [marks, setMarks] = useState<MarksItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarks() {
      try {
        const userId = localStorage.getItem("userId"); 

        const res = await fetch("/api/students/marks");
        const data = await res.json();

        const filtered = data.filter((item: MarksItem) => {
          if (typeof item.studentId === "object") {
            return item.studentId?._id === userId;
          }
          return item.studentId === userId;
        });

        setMarks(filtered);
      } catch (err) {
        console.error("Failed to fetch marks", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMarks();
  }, []);

  if (loading)
    return (
      <p className="p-8 text-gray-700 text-xl font-semibold animate-pulse">
        Loading marks...
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-10">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/50 animate-fadeIn">

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">
          📚 Your Marks
        </h1>

        {/* Back Button */}
        <div className="mb-6 text-center">
          <Link
            href="/student"
            className="px-6 py-2 bg-green-600 text-white rounded-xl font-semibold shadow hover:bg-green-700 transition-all hover:scale-105"
          >
            ⬅ Back to Dashboard
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white/60 rounded-xl shadow-lg backdrop-blur border border-white/70">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Marks</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              {marks.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="py-4 px-6 text-center text-gray-700 font-medium"
                  >
                    No marks available yet.
                  </td>
                </tr>
              ) : (
                marks.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-300 hover:bg-white/80 transition"
                  >
                    <td className="py-3 px-6 font-medium">
                      {item.subject || "N/A"}
                    </td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        (item.marks ?? 0) >= 75
                          ? "text-green-700"
                          : (item.marks ?? 0) >= 40
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.marks ?? "N/A"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
