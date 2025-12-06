import { connectDB } from "@/lib/mongodb";
import Student from "@/models/Student";
import Teacher from "@/models/Teacher";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password, role, rollNumber, department } = await req.json();

    await connectDB(); // IMPORTANT

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "student") {
      const student = new Student({
        name,
        email,
        password: hashedPassword,
        rollNumber,
      });
      await student.save();
    } else if (role === "teacher") {
      const teacher = new Teacher({
        name,
        email,
        password: hashedPassword,
        department,
      });
      await teacher.save();
    } else {
      return new Response(JSON.stringify({ error: "Invalid role" }), { status: 400 });
    }

    return new Response(
      JSON.stringify({ message: "Signup successful" }),
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Signup Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
