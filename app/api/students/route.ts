import Student from "@/models/Student";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({});
    return Response.json(students);
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch students", { status: 500 });
  }
}
