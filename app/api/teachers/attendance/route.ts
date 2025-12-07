import { connectDB } from "@/lib/mongodb";
import Attendance from "@/models/Attendance";

export async function POST(req: Request) {
  try {
    const { studentId, status, date } = await req.json();

    await connectDB(); // FIXED

    const newAttendance = new Attendance({
      studentId,
      status,
      date,
    });

    await newAttendance.save();

    return Response.json(
      { message: "Attendance saved" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Attendance POST error:", error);
    return new Response("Failed to save attendance", { status: 500 });
  }
}
