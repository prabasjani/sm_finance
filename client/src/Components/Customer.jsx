import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { TiArrowBackOutline } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const Customer = () => {
  const { customers } = useContext(AppContext);
  const [creditStatus, setCreditStatus] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const removeCustomer = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/customer/delete-customer/${id}`
    );
    navigate("/dashboard");
  };

  const customer = customers.find((customer) => customer._id == id);

  const updatePayment = async (id) => {
    await axios.put(
      `http://localhost:5000/api/customer/update-customer/${id}`,
      { creditStatus }
    );
    if (creditStatus == 10) {
      setCreditStatus(11);
    } else {
      setCreditStatus((prev) => prev + 1);
    }
  };

  return (
    <div className="p-10 flex flex-col justify-center gap-10 w-full dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold text-center">Customer Details</h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-2xl font-bold border-b">Customer Name</h1>
          <h1 className="text-2xl font-bold border-b">Aadhar Number</h1>
          <h1 className="text-2xl font-bold border-b">Mobile Number</h1>
          <h1 className="text-2xl font-bold border-b">Credit Amount</h1>
          <h1 className="text-2xl font-bold border-b">Credit Type</h1>
          <h1 className="text-2xl font-bold border-b">Interest Rate</h1>
          <h1 className="text-2xl font-bold border-b">Credit Status</h1>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-2xl font-bold border-b">
            {customer?.customerName?.toUpperCase()}
          </h1>
          <p className="text-2xl border-b">{customer?.aadharNumber}</p>
          <p className="text-2xl border-b">+91 {customer?.mobileNumber}</p>
          <p className="text-2xl border-b">
            &#8377;. {customer?.creditAmount?.toLocaleString()}
          </p>
          <p className="text-2xl border-b">{customer?.creditType}</p>
          <p className="text-2xl border-b">{customer?.interestRate * 100}%</p>
          <p className="text-2xl border-b">
            {customer?.creditStatus}
            {customer?.creditType === "weekly" ? "/10 weeks" : "/10 months"}
          </p>
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <Link
          to="/dashboard"
          className="btn bg-zinc-500 text-white font-semibold flex items-center gap-3 hover:bg-zinc-600"
        >
          Back <TiArrowBackOutline />
        </Link>
        <button
          className="rounded-lg px-6 bg-green-200 border-2 border-green-600 flex items-center gap-3 hover:bg-green-600 hover:text-white text-green-600 font-semibold"
          onClick={() => updatePayment(customer?._id)}
          disabled={creditStatus === 11 ? true : false}
        >
          {creditStatus === 11 ? "Finished" : "Paid"}
          <FcPaid />
        </button>
        <button className="btn bg-blue-500 flex items-center gap-3 hover:bg-blue-600 text-white font-semibold">
          Update <FaEdit />
        </button>
        <button
          className="btn bg-red-500 text-white font-semibold flex items-center gap-3 hover:bg-red-600"
          onClick={() => removeCustomer(customer?._id)}
        >
          Remove Customer <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Customer;
