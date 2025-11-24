import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    l_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    terms: {
      type: String,
      required: true,
      default: true,
    },
    otp: {
      type: String,
    },

    mils: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timespamas: true,
  }
);

export const User = mongoose.model("User", UserSchema);
