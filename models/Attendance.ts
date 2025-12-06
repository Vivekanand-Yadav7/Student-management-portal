import mongoose, { Schema, model, models } from "mongoose";

const attendanceSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student" },
  date: Date,
  status: String, // "Present" or "Absent"
});

export default models.Attendance || model("Attendance", attendanceSchema);
