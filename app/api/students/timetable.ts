import clientPromise from "@/lib/mongodb";
import Timetable from "@/models/Timetable";

export async function GET() {
  await clientPromise;
  const timetable = await Timetable.find({});
  return new Response(JSON.stringify(timetable));
}
