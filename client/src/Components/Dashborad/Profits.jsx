import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Profits = () => {
  const { adminData, customers } = useContext(AppContext);

  const totalInvestmentAmount = adminData.reduce((accumulator, admin) => {
    return accumulator + admin?.investment;
  }, 0);

  const totalProfitAmount = customers.reduce((accumulator, customer) => {
    return accumulator + customer.creditAmount * customer.interestRate;
  }, 0);

  return (
    <div className="w-full dark:bg-black dark:text-white">
      <div className="m-9 p-10 h-[525px] bg-slate-100 rounded-lg shadow-lg dark:bg-zinc-800">
        <div className="grid grid-cols-3 border-b-2 py-5">
          <h1 className="text-green-500 text-4xl font-bold">Admin</h1>
          <h1 className="text-green-500 text-4xl font-bold">Share</h1>
          <h1 className="text-green-500 text-4xl font-bold">Profit</h1>
        </div>
        {adminData.map((admin, index) => {
          const profitShare = (admin?.investment / totalInvestmentAmount) * 100;
          return (
            <div
              className="grid grid-cols-3 border-b py-5 text-2xl font-bold hover:bg-white dark:hover:bg-black"
              key={index}
            >
              <h1 className="col text-2xl font-bold">
                {admin?.adminName?.toUpperCase()}
              </h1>
              <h1 className="col text-2xl font-bold">
                {profitShare.toFixed(1)} %
              </h1>
              <h1 className="col text-2xl font-bold">
                &#8377;.
                {(totalProfitAmount * (profitShare.toFixed(1) / 100)).toFixed(
                  2
                )}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profits;
