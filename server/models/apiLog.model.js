import mongoose from "mongoose";

const apiLogSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const ApiLog = mongoose.model("api_logs", apiLogSchema);
