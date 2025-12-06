import mongoose, { Schema, model, models } from "mongoose";

const marksSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student" },
  subject: String,
  marks: Number,
});

export default models.Marks || model("Marks", marksSchema);
