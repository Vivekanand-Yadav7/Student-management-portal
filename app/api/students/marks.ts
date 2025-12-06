import clientPromise from "@/lib/mongodb";
import Marks from "@/models/Marks";

export async function GET() {
  await clientPromise;
  const marks = await Marks.find({}).populate("studentId");
  return new Response(JSON.stringify(marks));
}
