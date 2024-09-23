import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    aadhar: {
      type: Number,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    role: {
      type: String,
      require: true,
      default: "user",
    },
    investment: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);
