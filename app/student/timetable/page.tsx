"use client";

import { useEffect, useState } from "react";

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
    fetch("/api/timetable")
      .then((res) => res.json())
      .then((data) => {
        setTimetable(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Timetable</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Day</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Start Time</th>
              <th className="py-3 px-6 text-left">End Time</th>
              <th className="py-3 px-6 text-left">Classroom</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {timetable.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-100">
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
  );
}
