import mongoose, { Schema, model, models } from "mongoose";

const teacherSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  department: String,
});

export default models.Teacher || model("Teacher", teacherSchema);
