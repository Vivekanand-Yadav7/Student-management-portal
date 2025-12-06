import clientPromise from "@/lib/mongodb";
import Attendance from "@/models/Attendance";

export async function GET() {
  await clientPromise;
  const attendance = await Attendance.find({}).populate("studentId");
  return new Response(JSON.stringify(attendance));
}
