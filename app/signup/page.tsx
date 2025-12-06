"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Signup</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
        />
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

        {role === "student" && (
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={e => setRollNumber(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />
        )}

        {role === "teacher" && (
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />
        )}

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
