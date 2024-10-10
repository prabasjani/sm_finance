import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const CustInfo = ({ searchCust }) => {
  const { customers } = useContext(AppContext);

  return (
    <div className="dark:bg-black">
      <div className="overflow-scroll overflow-x-hidden w-full h-[300px] border-2 border-gray-400 rounded-xl">
        {customers <= 0 ? (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-3xl font-bold text-center text-red-500">
              No Customers Found Add New Cusomer
            </h1>
          </div>
        ) : (
          <div className="table w-full ">
            <div className="table-header-group rounded-t-xl relative">
              <div className="table-row bg-slate-200">
                <div className="table-cell text-left p-3 text-2xl font-bold">
                  Customer Name
                </div>
                <div className="table-cell text-center p-3 text-2xl font-bold">
                  Date Time
                </div>
                <div className="table-cell text-left p-3 text-2xl font-bold">
                  Credit Amount
                </div>
                <div className="table-cell text-left p-3 text-2xl font-bold">
                  Credit Type
                </div>
                <div className="table-cell text-left p-3 text-2xl font-bold">
                  Credit Status
                </div>
              </div>
            </div>
            {customers
              .filter((customer) => {
                return (
                  customer?.customerName.toLowerCase().includes(searchCust) ||
                  String(customer?.mobileNumber).includes(searchCust) ||
                  String(customer?.aadharNumber).includes(searchCust)
                );
              })
              .map((customer, index) => {
                return (
                  <div className="table-row-group" key={index}>
                    <div
                      className={`table-row dark:text-slate-200 cursor-pointer hover:bg-red-100 dark:hover:bg-zinc-800 ${
                        customer?.creditStatus === 10
                          ? "bg-green-100 hover:bg-green-200"
                          : null
                      }`}
                    >
                      <Link
                        to={`/customer/${customer._id}`}
                        className="table-cell text-center p-3 text-xl font-semibold"
                      >
                        {customer?.customerName?.toUpperCase()}
                      </Link>
                      <div className="table-cell text-center p-3 text-xl">
                        {customer?.createdAt}
                      </div>
                      <div className="table-cell text-center p-3 text-xl">
                        &#8377;. {customer?.creditAmount?.toFixed(2)}
                      </div>
                      <div className="table-cell text-center p-3 text-xl">
                        {customer?.creditType}
                      </div>
                      <div className="table-cell text-center p-3 text-md">
                        <h1 className="text-2xl font-semibold inline">
                          {customer?.creditStatus}
                        </h1>
                        {customer?.creditType === "weekly"
                          ? "/10 weeks"
                          : "/10 months"}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustInfo;
