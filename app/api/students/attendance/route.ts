import { connectDB } from "@/lib/mongodb";
import Attendance from "@/models/Attendance";

export async function GET() {
  try {
    await connectDB();

    const attendance = await Attendance.find({})
      .populate("studentId"); // Make sure studentId is a ref in model

    return Response.json(attendance);
  } catch (error) {
    console.error("Attendance fetch error:", error);
    return new Response("Failed to fetch attendance", { status: 500 });
  }
}
