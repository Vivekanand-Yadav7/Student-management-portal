"use client";
import { useEffect, useState } from "react";

export default function Attendance() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetch("/api/students/attendance").then(r => r.json()).then(setAttendance);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner overflow-x-auto">
        <pre>{JSON.stringify(attendance, null, 2)}</pre>
      </div>
    </div>
  );
}
