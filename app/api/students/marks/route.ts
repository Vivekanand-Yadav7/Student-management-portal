import { connectDB } from "@/lib/mongodb";
import Marks from "@/models/Marks";

export async function GET() {
  await connectDB();
  const marks = await Marks.find({}).populate("studentId");

  return new Response(JSON.stringify(marks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
