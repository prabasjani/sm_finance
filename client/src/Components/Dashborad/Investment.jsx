import React, { useContext } from "react";
import InvestmentPieChart from "../InvestmentPieChart";
import AdminBarChart from "../AdminBarChart";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";

const Investment = () => {
  const { adminData, removeAdmin } = useContext(AppContext);

  return (
    <div className="w-full dark:bg-black dark:text-white">
      {adminData <= 0 ? (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-red-500">No Admins here...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 p-10">
          <div className="col bg-slate-100 p-5 rounded-lg dark:bg-zinc-800">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-4 border-b-2">
                <h1 className="col text-2xl font-bold">No</h1>
                <h1 className="col text-2xl font-bold">Name</h1>
                <h1 className="col ml-5 text-2xl font-bold">Investment</h1>
                <h1 className="col ml-10 text-2xl font-bold">Action</h1>
              </div>
              {adminData.map((admin, index) => {
                return (
                  <div className="grid grid-cols-4 border-b-2 " key={index}>
                    <h1 className="col text-xl font-bold">{index + 1}</h1>
                    <h1 className="col text-xl">
                      {admin?.adminName?.toUpperCase()}
                    </h1>
                    <p className="col ml-5 font-semibold">
                      &#8377;. {admin?.investment?.toLocaleString()}
                    </p>
                    <div className="flex justify-center items-center gap-3">
                      <button>
                        <FaEdit color="blue" size={20} />
                      </button>
                      <button onClick={() => removeAdmin(admin?._id)}>
                        <FaTrashAlt color="red" size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col h-[500px] bg-slate-100 p-5 rounded-lg dark:bg-zinc-800">
            {/* <InvestmentPieChart adminData={adminData} /> */}
            <AdminBarChart adminData={adminData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Investment;
