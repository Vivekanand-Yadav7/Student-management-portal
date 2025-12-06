import mongoose, { Schema, model, models } from "mongoose";

const studentSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  rollNumber: String,
});

export default models.Student || model("Student", studentSchema);
