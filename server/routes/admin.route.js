import express from "express";
import { AdminModel } from "../models/admin.model.js";
import bcrypt from "bcrypt";
import { CustomerModel } from "../models/customer.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/all-admins", async (req, res) => {
  const admins = await AdminModel.find({});
  res.json({ success: true, data: admins });
});

router.get("/investment-info", async (req, res) => {
  try {
    const customers = await CustomerModel.find({});
    const admins = await AdminModel.find({});

    if (!customers) {
      return res
        .status(404)
        .json({ success: false, message: "No user found!" });
    }
    const totalProfitAmount = customers.reduce((accumulator, customer) => {
      return accumulator + customer.creditAmount * customer.interestRate;
    }, 0);
    const totalCreditAmount = customers.reduce((accumulator, customer) => {
      return accumulator + customer.creditAmount;
    }, 0);
    const totalInvestmentAmount = admins.reduce((accumulator, admin) => {
      return accumulator + admin.investment;
    }, 0);
    const balanceInvestment = totalInvestmentAmount - totalCreditAmount;

    res.status(200).json({
      success: true,
      investment: totalInvestmentAmount,
      totalCredit: totalCreditAmount,
      totalProfit: totalProfitAmount,
      availableInvestment: balanceInvestment,
      message: `The Available Investment : $.${balanceInvestment} \n Total Profit amount: $.${totalProfitAmount}`,
    });
  } catch (error) {
    console.log(`Balance investment in admin page error ${error.message}`);
  }
});

router.post("/add-admin", async (req, res) => {
  const { adminName, adminPassword, investment } = req.body;

  try {
    const admin = await AdminModel.findOne({ adminName });
    if (admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin Already exist!" });
    }
    const hashedPwd = await bcrypt.hash(adminPassword, 10);
    const newAdmin = new AdminModel({
      adminName,
      adminPassword: hashedPwd,
      investment,
    });
    await newAdmin.save();
    res
      .status(200)
      .json({ success: true, message: "Admin added succesfully!" });
  } catch (error) {
    console.log(`Add admin page error ${error.message}`);
  }
});

router.put("/add-investment/:id", async (req, res) => {
  const { id } = req.params;
  const { addInvestment } = req.body;
  try {
    const admin = await AdminModel.findById(id);
    const totalInvestment = admin.investment + Number(addInvestment);
    const addedInvestment = await AdminModel.findByIdAndUpdate(
      id,
      { investment: totalInvestment },
      {
        new: true,
      }
    );
    res.json({ success: true, data: addedInvestment, res: addInvestment });
  } catch (error) {
    console.log(`Add investment in admin page error ${error.message}`);
  }
});

router.delete("/delete-admin/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Admin not found Invalid ID" });
  }
  try {
    await AdminModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Admin Removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(`deleting admin failed ${error.message}`);
  }
});
export { router as AdminRoute };
