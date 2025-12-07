"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TimetableItem = {
  _id: string;
  day: string;
  subject: string;
  startTime: string;
  endTime: string;
  classRoom: string;
};

export default function Page() {
  const [timetable, setTimetable] = useState<TimetableItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/students/timetable")
      .then((res) => res.json())
      .then((data) => {
        setTimetable(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-xl text-gray-700">
        Loading...
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-white/40">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900">
            Student Timetable
          </h1>

          <Link
            href="/student"
            className="py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all font-medium"
          >
            ⬅ Back
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white/80 rounded-xl shadow-md overflow-hidden border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Day</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Start Time</th>
                <th className="py-3 px-6 text-left">End Time</th>
                <th className="py-3 px-6 text-left">Classroom</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              {timetable.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-blue-50 transition-all"
                >
                  <td className="py-3 px-6">{item.day}</td>
                  <td className="py-3 px-6">{item.subject}</td>
                  <td className="py-3 px-6">{item.startTime}</td>
                  <td className="py-3 px-6">{item.endTime}</td>
                  <td className="py-3 px-6">{item.classRoom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
