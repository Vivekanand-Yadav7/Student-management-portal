"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type AttendanceItem = {
  _id: string;
  date: string;
  status: string;
  studentId: { _id: string; name: string };
};

export default function Attendance() {
  const [attendance, setAttendance] = useState<AttendanceItem[]>([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.warn("No userId found in localStorage");
      return;
    }

    fetch("/api/students/attendance")
      .then((r) => r.json())
      .then((data) => {
        const filtered = data.filter(
          (item: any) => item.studentId?._id === userId
        );
        setAttendance(filtered);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-10">
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/40 animate-fadeIn">

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center drop-shadow">
          📘 Your Attendance Record
        </h1>

        {/* Back Button */}
        <div className="mb-6 text-center">
          <Link
            href="/student"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition-all hover:scale-105"
          >
            ⬅ Back to Dashboard
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white/50 rounded-xl shadow-lg backdrop-blur border border-white/60">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="py-4 px-6 text-center text-gray-700 font-medium"
                  >
                    No attendance records found.
                  </td>
                </tr>
              ) : (
                attendance.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-300 hover:bg-white/70 transition"
                  >
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        item.status === "Present"
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      {item.status}
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
