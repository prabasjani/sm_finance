import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      require: true,
    },
    aadharNumber: {
      type: Number,
      require: true,
    },
    mobileNumber: {
      type: Number,
      require: true,
    },
    creditAmount: {
      type: Number,
      require: true,
    },
    interestRate: {
      type: Number,
      require: true,
      default: 0.05,
    },
    creditType: {
      type: String,
      require: true,
    },
    creditStatus: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export const CustomerModel = mongoose.model("customer", CustomerSchema);
