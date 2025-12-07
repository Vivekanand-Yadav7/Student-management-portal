"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, ClipboardList, PenSquare } from "lucide-react";

export default function TeacherDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 p-10 flex flex-col items-center">

      {/* Logout Button */}
      <div className="w-full max-w-5xl flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition duration-300"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow mb-3">
        Teacher Dashboard
      </h1>

      {/* Inspirational teacher quote */}
      <p className="text-xl text-gray-700 italic mb-12 text-center max-w-2xl">
        "A good teacher is like a candle — it consumes itself to light the way for others."
      </p>

      {/* Main Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        <Link
          href="/teacher/attendance"
          className="group bg-white rounded-2xl border shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition hover:-translate-y-1"
        >
          <ClipboardList className="w-16 h-16 text-blue-500 group-hover:scale-110 transition" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Mark Attendance
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Manage classroom attendance quickly and efficiently.
          </p>
        </Link>

        <Link
          href="/teacher/marks"
          className="group bg-white rounded-2xl border shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition hover:-translate-y-1"
        >
          <PenSquare className="w-16 h-16 text-green-600 group-hover:scale-110 transition" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Enter Marks
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Record and update student academic performance.
          </p>
        </Link>

      </div>

      {/* Footer Teacher Quote */}
      <div className="mt-16 max-w-3xl text-center text-lg text-gray-700 italic">
        "The best teachers teach from the heart, not from the book."
      </div>
    </div>
  );
}
