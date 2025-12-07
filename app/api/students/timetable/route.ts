import { connectDB } from "@/lib/mongodb";
import Timetable from "@/models/Timetable";

export async function GET() {
  await connectDB(); // <-- FIXED
  const timetable = await Timetable.find({});

  return new Response(JSON.stringify(timetable), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
