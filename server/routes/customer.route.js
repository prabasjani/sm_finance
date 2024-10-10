import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { UserModel } from "../models/user.model.js";
import { CustomerModel } from "../models/customer.model.js";

const router = express.Router();

router.get("/customer-list", async (req, res) => {
  try {
    const customers = await CustomerModel.find({});
    if (!customers) {
      return res.json({ success: false, message: "No Customer Found!" });
    }
    res.status(200).json({
      success: true,
      totalCustomers: customers.length,
      customersList: customers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log("Fetch user error");
  }
});

// router.post("/register", async (req, res) => {
//   const { username, email, mobile, aadhar, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ username });
//     if (user) {
//       return res.json({ success: true, message: "User already exist!" });
//     }
//     const hashedPwd = await bcrypt.hash(password, 10);
//     const newUser = new UserModel({
//       username,
//       email,
//       mobile,
//       aadhar,
//       password: hashedPwd,
//     });
//     await newUser.save();
//     res
//       .status(201)
//       .json({ success: true, message: "User registered Successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//     console.log(`User details gets error ${error.message}`);
//   }
// });

router.post("/add-customer", async (req, res) => {
  const {
    customerName,
    aadharNumber,
    mobileNumber,
    creditAmount,
    interestRate,
    creditType,
  } = req.body;
  try {
    const customer = await CustomerModel.findOne({ customerName });
    if (customer) {
      return res
        .status(200)
        .json({ success: false, message: "Customer already exist!" });
    }
    const newCustomer = new CustomerModel({
      customerName,
      aadharNumber,
      mobileNumber,
      creditAmount,
      interestRate,
      creditType,
    });
    await newCustomer.save();

    res
      .status(201)
      .json({ success: true, message: "Customer added Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(`Add customer failed ${error.message}`);
  }
});

router.put("/update-customer/:id", async (req, res) => {
  const { id } = req.params;
  const customer = req.body;
  const creditStatus = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "User not found Invalid ID" });
  }

  try {
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      id,
      customer,
      { new: true }
    );
    const creditStatusUpdated = await CustomerModel.findByIdAndUpdate(
      id,
      creditStatus,
      { new: true }
    );
    res.json({
      success: true,
      data: updatedCustomer,
      creditStatus: creditStatusUpdated,
      message: "Customer info updated! ",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(`Customer updation failed ${error.message}`);
  }
});

router.delete("/delete-customer/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "User not found Invalid ID" });
  }
  try {
    await CustomerModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Customer Removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(`deleting customer failed ${error.message}`);
  }
});

export { router as CustomerRoute };
