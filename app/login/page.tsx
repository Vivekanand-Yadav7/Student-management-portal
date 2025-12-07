"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.user && data.user._id) {
        localStorage.setItem("userId", data.user._id);
      }
      router.push(role === "student" ? "/student" : "/teacher");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200">
      <div className="p-10 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl w-96 animate-fadeIn">
        
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-900 drop-shadow-lg">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-800 mb-6 font-medium">
          Login to continue to your portal
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 placeholder-gray-600 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 placeholder-gray-600 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full p-3 mb-5 bg-white/60 border border-white/70 rounded-xl text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Login
        </button>

        {/* Signup Button */}
        <p className="text-center mt-6 text-gray-900">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-700 font-bold hover:underline hover:text-indigo-900"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
