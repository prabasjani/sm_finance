import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [investmentInfo, setInvestmentInfo] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [adminData, setAdminData] = useState([]);
  // const [paymentStatus, setPaymentStatus] = useState({});

  // only for count fetching from customersList Response
  const [customerCount, setCustomerCount] = useState(0);

  // Add Investment
  const [addInvestment, setAddInvestment] = useState(0);

  const investmentResponse = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/investment-info"
    );
    setInvestmentInfo(res?.data);
  };

  const customersListResponse = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/customer/customer-list"
    );
    setCustomers(res?.data?.customersList);
    setCustomerCount(res?.data?.totalCustomers);
  };

  const adminsListResponse = async () => {
    const admin = await axios.get("http://localhost:5000/api/admin/all-admins");
    setAdminData(admin?.data?.data);
  };

  const removeAdmin = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/delete-admin/${id}`);
  };

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

  // Add Investment
  const addInvestmentResponse = async () => {
    const admin = await axios.get("http://localhost:5000/api/admin/all-admins");
    await axios.put(
      `http://localhost:5000/api/admin/add-investment/${admin?.data?.data?.[0]._id}`,
      {
        addInvestment,
      }
    );
  };

  useEffect(() => {
    investmentResponse();
    customersListResponse();
    adminsListResponse();
    // removeAdmin();
  }, [adminData, customerCount]);

  const contextValue = {
    investmentInfo,
    customers,
    customersListResponse,
    adminData,
    removeAdmin,
    customerCount,
    setCustomerName,
    setAadharNumber,
    setMobileNumber,
    setCreditAmount,
    setInterestRate,
    setCreditType,
    addNewCustomer,
    addInvestment,
    setAddInvestment,
    addInvestmentResponse,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
