import clientPromise from "@/lib/mongodb";
import Marks from "@/models/Marks";

export async function POST(req: Request) {
  const { studentId, subject, marks } = await req.json();
  await clientPromise;

  const newMarks = new Marks({ studentId, subject, marks });
  await newMarks.save();

  return new Response(JSON.stringify({ message: "Marks saved" }), { status: 201 });
}
