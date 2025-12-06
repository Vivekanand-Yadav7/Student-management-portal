"use client";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/teacher/attendance" className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Mark Attendance</Link>
        <Link href="/teacher/marks" className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">Enter Marks</Link>
      </div>
    </div>
  );
}
