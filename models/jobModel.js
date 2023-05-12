import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    pay: {
      type: Number,
      default: 0,
    },
    discreption: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    education: {
      type: String,
      required: true,
    },
    responsbality: {
      type: String,
    },
    countApplicant: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", jobSchema);
