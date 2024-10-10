import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { AppContext } from "../Context/AppContext";

const UserHomePage = () => {
  const { customers, customersListResponse } = useContext(AppContext);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [error, setError] = useState("");

  const getDetail = (e) => {
    e.preventDefault();
    customersListResponse();
  };

  const customer = customers.find(
    (customer) => customer.mobileNumber == mobileNumber
  );

  return (
    <div className="px-20 py-10 bg-white w-full min-h-full flex flex-col gap-5 items-center justify-center dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold">Welcome to Sri Mahalaxmi Finance</h1>
      <form
        className="flex gap-5 bg-white px-0 p-5 w-[600px] dark:bg-zinc-900 dark:text-white"
        onSubmit={getDetail}
      >
        <input
          type="number"
          placeholder="Enter Your Mobile Number to Get details"
          className="w-3/4 px-10 focus:outline-none border-b dark:bg-zinc-900 dark:text-white"
          id="userInput"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button type="submit" className="btn bg-blue-500 text-white">
          Get Details
        </button>
      </form>
      <p className="text-sm text-red-500">{mobileNumber ? null : error}</p>

      {customer && <UserInfo customer={customer} />}

      <p className="text-sm text-gray-400">
        If you are an Admin click here to{" "}
        <Link className="text-blue-500 underline">Login</Link>
      </p>
    </div>
  );
};

export default UserHomePage;
