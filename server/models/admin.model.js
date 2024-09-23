import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    require: true,
  },
  adminPassword: {
    type: String,
    require: true,
  },
  investment: {
    type: Number,
    require: true,
  },
  addInvestment: {
    type: Number,
  },
});

export const AdminModel = mongoose.model("admin", AdminSchema);
