import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { TiArrowBackOutline } from "react-icons/ti";
import { MdOutlineSaveAlt } from "react-icons/md";
import { toast } from "sonner";

const updateCustomer = () => {
  const [customerName, setCustomerName] = useState("");
  const [aadharNumber, setAadharNumber] = useState(0);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [creditAmount, setCreditAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [creditType, setCreditType] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // const customer = {};

  const { customers } = useContext(AppContext);
  const customerInfo = customers.find((customer) => customer._id == id);

  useEffect(() => {
    setCustomerName(customerInfo?.customerName);
    setAadharNumber(customerInfo?.aadharNumber);
    setMobileNumber(customerInfo?.mobileNumber);
    setCreditAmount(customerInfo?.creditAmount);
    setCreditType(customerInfo?.creditType);
    setInterestRate(customerInfo?.interestRate);
  }, []);
  // Update Customer
  const updateCustomer = async (id) => {
    await axios.put(
      `http://localhost:5000/api/customer/update-customer/${id}`,
      {
        customerName,
        aadharNumber,
        mobileNumber,
        creditAmount,
        interestRate,
        creditType,
      }
    );
  };
  const handleAddCustomer = (e) => {
    e.preventDefault();
    updateCustomer(customerInfo?._id);
    toast.success(
      `${customerInfo?.customerName?.toUpperCase()}'s profile was updated!`
    );
    navigate("/dashboard");
  };

  return (
    <div className="w-full px-16 pt-10 dark:bg-black dark:text-white">
      <div className="col bg-slate-100 rounded-lg dark:bg-zinc-800 p-10">
        <h1 className="text-2xl font-bold mb-5">Update Customer Info</h1>
        <form
          className="flex flex-col items-start gap-5"
          onSubmit={handleAddCustomer}
        >
          <input
            type="text"
            placeholder="Enter Customer Name"
            className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Aadhar Number"
            className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
            onChange={(e) => setAadharNumber(e.target.value)}
            value={aadharNumber}
            required
            maxLength={12}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
            onChange={(e) => setMobileNumber(e.target.value)}
            value={mobileNumber}
            maxLength={10}
          />
          <input
            type="number"
            placeholder="Enter Credit Amount"
            className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
            onChange={(e) => Number(setCreditAmount(e.target.value))}
            value={creditAmount}
          />
          <select
            className="px-4 py-2 focus:outline-none border-b-2 bg-white border-gray-400 rounded-md text-black w-full"
            onChange={(e) => Number(setInterestRate(e.target.value))}
            value={interestRate}
          >
            <option value="">Interest Rate</option>
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
          </select>
          <select
            className="px-4 py-2 focus:outline-none bg-white border-b-2 border-gray-400 rounded-md text-black w-full"
            onChange={(e) => setCreditType(e.target.value)}
            value={creditType}
          >
            <option value="" disabled>
              Credit Type
            </option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <div className="flex gap-5">
            <button
              type="submit"
              className="btn bg-blue-600 text-white font-semibold flex items-center gap-3 hover:bg-blue-700"
            >
              Save Customer <MdOutlineSaveAlt />
            </button>
            <Link
              to={`/dashboard/customer/${customerInfo._id}`}
              className="btn bg-zinc-500 text-white font-semibold flex items-center gap-3 hover:bg-zinc-600"
            >
              Back <TiArrowBackOutline />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default updateCustomer;
