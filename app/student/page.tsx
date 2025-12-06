"use client";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/student/attendance" className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Attendance</Link>
        <Link href="/student/marks" className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">Marks</Link>
        <Link href="/student/timetable" className="p-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600">Timetable</Link>
      </div>
    </div>
  );
}
