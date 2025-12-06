import mongoose, { Schema, model, models } from "mongoose";

const timetableSchema = new Schema({
  day: String,
  subject: String,
  startTime: String,
  endTime: String,
  classRoom: String,
});

export default models.Timetable || model("Timetable", timetableSchema);
