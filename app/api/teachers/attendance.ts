import clientPromise from "@/lib/mongodb";
import Attendance from "@/models/Attendance";

export async function POST(req: Request) {
  const { studentId, status, date } = await req.json();
  await clientPromise;

  const newAttendance = new Attendance({ studentId, status, date });
  await newAttendance.save();

  return new Response(JSON.stringify({ message: "Attendance saved" }), { status: 201 });
}
