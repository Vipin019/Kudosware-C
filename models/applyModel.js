import mongoose from "mongoose";

const applySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    collegeName: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },

    resume: {
      data: Buffer,
      contentType: String,
    },
    job: {
      type: mongoose.ObjectId,
      ref: "job",
    },
    user: {
      type: mongoose.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("apply", applySchema);
