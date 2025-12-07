"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password, role, rollNumber, department }),
    });
    const data = await res.json();
    if (res.ok) router.push("/login");
    else alert(data.message || "Signup failed");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-lime-200">
      <div className="p-10 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl w-96 animate-fadeIn">
        
        <h1 className="text-4xl font-extrabold mb-6 text-center text-green-900 drop-shadow-lg">
          Create Account 🌱
        </h1>

        <p className="text-center text-gray-800 mb-6 font-medium">
          Begin your journey by creating an account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 shadow placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 shadow placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 shadow placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {role === "student" && (
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={e => setRollNumber(e.target.value)}
            className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 placeholder-gray-600 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        )}

        {role === "teacher" && (
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            className="w-full p-3 mb-4 bg-white/60 border border-white/70 rounded-xl text-gray-900 placeholder-gray-600 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        )}

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Signup
        </button>

        {/* Login Button */}
        <p className="text-center mt-6 text-gray-900">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-800 font-bold hover:underline hover:text-green-900"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
