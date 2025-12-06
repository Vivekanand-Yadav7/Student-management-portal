"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role }),
    });
    const data = await res.json();
    if (res.ok) router.push(role === "student" ? "/student" : "/teacher");
    else alert(data.error);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
        />

        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
