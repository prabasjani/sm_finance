import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserInfo from "./UserInfo";

const UserHomePage = () => {
  const [fetched, setFetched] = useState([]);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [error, setError] = useState("");

  // const navigate = useNavigate();

  const response = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/customer/customer-list"
      );
      setFetched(res?.data?.customersList);
    } catch (error) {
      console.log("Error Fetching Info");
    }
    // customer
    //   ? navigate("/UserInfo")
    //   : setError("No User Found in this Mobile Number");
    //
  };
  // useEffect(() => {
  //   response();
  // }, []);

  const getDetail = (e) => {
    e.preventDefault();
    response();
  };

  const customer = fetched.find(
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
