import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();
  const [customerCount, setCustomerCount] = useState(0);
  const response = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/customer/customer-list"
    );
    setCustomerCount(res?.data?.totalCustomers);
  };
  useEffect(() => {
    response();
  }, [customerCount]);

  // Add A new Customer
  const [customerName, setCustomerName] = useState("");
  const [aadharNumber, setAadharNumber] = useState(0);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [creditType, setCreditType] = useState("");

  const addNewCustomer = async () => {
    await axios.post("http://localhost:5000/api/customer/add-customer", {
      customerName,
      aadharNumber,
      mobileNumber,
      creditAmount,
      interestRate,
      creditType,
    });
  };
  const handleAddCustomer = (e) => {
    e.preventDefault();
    addNewCustomer();
    navigate("/custInfo");
  };

  return (
    <div className="w-full px-16 pt-10 dark:bg-black dark:text-white">
      <div className="grid grid-cols-2 gap-5">
        <div className="col bg-slate-100 rounded-lg dark:bg-zinc-800 p-10">
          <h1 className="text-2xl font-bold mb-5">Add a New Customer</h1>
          <form
            className="flex flex-col items-start gap-5"
            onSubmit={handleAddCustomer}
          >
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Aadhar Number"
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => setAadharNumber(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Credit Amount"
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => Number(setCreditAmount(e.target.value))}
            />
            <select
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => Number(setInterestRate(e.target.value))}
            >
              <option value="">Interest Rate</option>
              <option value="0.05">5%</option>
              <option value="0.1">10%</option>
            </select>
            <select
              className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
              onChange={(e) => setCreditType(e.target.value)}
            >
              <option value="">Credit Type</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <button type="submit" className="btn bg-green-600 text-white">
              Save Customer
            </button>
          </form>
        </div>
        <div className="col bg-slate-100 rounded-lg p-10 dark:bg-zinc-800">
          <div className="flex flex-col items-center justify-center rounded-full bg-white h-full dark:bg-black dark:text-white">
            <h1 className="text-[200px] m-0 font-bold">{customerCount}+</h1>
            <span className="text-xl font-semibold">Current Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
