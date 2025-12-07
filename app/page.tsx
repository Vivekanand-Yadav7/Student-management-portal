import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200">
      <div className="p-12 rounded-3xl shadow-2xl bg-white/30 backdrop-blur-xl border border-white/40 max-w-md w-full text-center animate-fadeIn">
        
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-900 drop-shadow-md">
          🎓 Student Portal
        </h1>

        <p className="text-lg mb-6 text-gray-800 font-medium">
          Welcome! Choose your role to continue.
        </p>

        {/* Motivational Quote */}
        <div className="bg-white/40 p-4 rounded-xl border border-white/50 shadow mb-8">
          <p className="text-md font-semibold text-purple-800 italic">
            “The future belongs to those who learn more skills and combine them creatively.”
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Link
            href="/login"
            className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
}
