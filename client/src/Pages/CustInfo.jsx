import axios from "axios";
import React, { useEffect, useState } from "react";

const CustInfo = () => {
  const [customers, setCustomers] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const response = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/customer/customer-list"
    );
    setCustomers(res?.data?.customersList);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <div className="w-full px-16 pt-10 dark:bg-black">
      <div className="overflow-scroll w-full h-[550px] border-2 border-gray-400 rounded-xl">
        <div class="table w-full ">
          <div class="table-header-group rounded-t-xl relative">
            <div class="table-row bg-slate-200">
              <div class="table-cell text-left p-3 text-2xl font-bold">
                Customer Name
              </div>
              <div class="table-cell text-left p-3 text-2xl font-bold">
                Mobile Number
              </div>
              <div class="table-cell text-left p-3 text-2xl font-bold">
                Credit Amount
              </div>
              <div class="table-cell text-left p-3 text-2xl font-bold">
                Credit Type
              </div>
              <div class="table-cell text-left p-3 text-2xl font-bold">
                Payment Status
              </div>
            </div>
          </div>
          {customers.map((customer, index) => {
            return (
              <div class="table-row-group" key={index}>
                <div
                  class={`table-row dark:text-slate-200 cursor-pointer ${
                    paymentStatus ? "hover:bg-green-100 " : "hover:bg-red-100"
                  } dark:hover:bg-zinc-800`}
                >
                  <div class="table-cell text-center p-3 text-xl font-semibold">
                    {customer?.customerName?.toUpperCase()}
                  </div>
                  <div class="table-cell text-center p-3 text-xl">
                    +91 {customer?.mobileNumber}
                  </div>
                  <div class="table-cell text-center p-3 text-xl">
                    &#8377;. {customer?.creditAmount?.toFixed(2)}
                  </div>
                  <div class="table-cell text-center p-3 text-xl">
                    {customer?.creditType}
                  </div>
                  <div class="table-cell text-center p-3 text-md">
                    <button
                      className={`${
                        paymentStatus
                          ? "bg-green-200 text-green-500"
                          : "bg-red-200 text-red-500"
                      } dark:bg-zinc-900 px-6 py-2 rounded-3xl`}
                      onClick={() => setPaymentStatus((prev) => !prev)}
                    >
                      {paymentStatus ? "Paid" : "Pending"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustInfo;
