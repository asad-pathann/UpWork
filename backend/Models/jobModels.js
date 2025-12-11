import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    dic: {
      type: String,
    },

    scope: {
      type: { type: String }, // string
      duration: { type: String },
      experience: { type: String },
      term: { type: String },
    },
    tags: {
      type: Array,
    },

    rate: {
      type: {
        type: String,
        range: String,
      },
    },

    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Jobs = mongoose.model("Jobs", jobSchema);
