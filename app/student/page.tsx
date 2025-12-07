"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, CalendarDays, CheckCircle, LogOut } from "lucide-react";

export default function StudentDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 p-10 flex flex-col items-center">
      
      {/* Top Bar with Logout */}
      <div className="w-full max-w-6xl flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition duration-300"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Inspirational Quote */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm mb-4">
          Student Dashboard
        </h1>
        <p className="text-xl text-gray-700 italic">
          "Success is the sum of small efforts, repeated day in and day out."
        </p>
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        <Link
          href="/student/attendance"
          className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition duration-300 hover:-translate-y-1"
        >
          <CheckCircle className="w-14 h-14 text-blue-600 group-hover:scale-110 transition" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Attendance</h2>
          <p className="mt-2 text-gray-600 text-center">
            Track your daily presence and stay disciplined.
          </p>
        </Link>

        <Link
          href="/student/marks"
          className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition duration-300 hover:-translate-y-1"
        >
          <BookOpen className="w-14 h-14 text-green-600 group-hover:scale-110 transition" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Marks</h2>
          <p className="mt-2 text-gray-600 text-center">
            Review your academic progress and improve.
          </p>
        </Link>

        <Link
          href="/student/timetable"
          className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border hover:shadow-2xl transition duration-300 hover:-translate-y-1"
        >
          <CalendarDays className="w-14 h-14 text-purple-600 group-hover:scale-110 transition" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Timetable</h2>
          <p className="mt-2 text-gray-600 text-center">
            Stay organized with your daily schedule.
          </p>
        </Link>
      </div>

      {/* Footer Quote */}
      <div className="mt-16 max-w-2xl text-center text-lg text-gray-700 italic">
        "The future belongs to those who believe in the beauty of their dreams."
      </div>
    </div>
  );
}
