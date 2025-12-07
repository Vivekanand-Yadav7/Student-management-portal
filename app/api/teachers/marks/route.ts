import { connectDB } from "@/lib/mongodb";
import Marks from "@/models/Marks";

export async function POST(req: Request) {
  try {
    const { studentId, subject, marks } = await req.json();

    await connectDB();

    const newMarks = new Marks({
      studentId,
      subject,
      marks,
    });

    await newMarks.save();

    return Response.json({ message: "Marks saved" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to save marks", { status: 500 });
  }
}
