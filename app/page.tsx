import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="p-12 rounded-3xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900">🎓 Student Portal</h1>
        <p className="text-lg mb-10 text-gray-800">Welcome! Choose your role to continue.</p>
        <div className="flex flex-col gap-5">
          <Link href="/login" className="py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all">
            Login
          </Link>
          <Link href="/signup" className="py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition-all">
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
}
