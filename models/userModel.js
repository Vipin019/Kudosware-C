import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    idCardNo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
