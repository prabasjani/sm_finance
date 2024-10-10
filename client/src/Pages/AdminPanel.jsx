import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiPayMoney } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import AdminBarChart from "../Components/AdminBarChart";
import { Toaster, toast } from "sonner";
import { AppContext } from "../Context/AppContext";

const AdminPanel = () => {
  const { setAddInvestment, addInvestmentResponse, adminData } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleAddInvestment = (e) => {
    e.preventDefault();
    addInvestmentResponse();
    toast.success("Investment Added successfully");
    navigate("/dashboard");
  };

  //   Add admin
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [investment, setInvestment] = useState(0);

  const addAdmin = async () => {
    await axios.post("http://localhost:5000/api/admin/add-admin", {
      adminName,
      adminPassword,
      investment,
    });
  };
  const handleAddAdmin = (e) => {
    e.preventDefault();
    addAdmin();
    <Toaster />;
    toast.success("Admin Added");
    navigate("/dashboard");
  };

  return (
    <div className="w-full px-16 pt-10 dark:bg-black dark:text-white">
      <div className="grid grid-cols-2 gap-5">
        <div className="col h-[500px] bg-slate-100 p-5 rounded-lg dark:bg-zinc-800">
          <div className="flex flex-col justify-center gap-5 h-full text-white">
            <form
              className="flex flex-col items-start gap-3"
              onSubmit={handleAddInvestment}
            >
              <input
                type="number"
                placeholder="Add Investment"
                className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
                onChange={(e) => setAddInvestment(e.target.value)}
                required
              />
              <button type="submit" className="btn bg-green-600">
                <div className="flex items-center gap-3">
                  <GiPayMoney size={20} /> Add Investment
                </div>
              </button>
            </form>

            <form
              className="flex flex-col items-start gap-3 my-10"
              onSubmit={handleAddAdmin}
            >
              <input
                type="text"
                className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
                placeholder="Add Admin..."
                onChange={(e) => setAdminName(e.target.value)}
                required
              />
              <input
                type="text"
                className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
                placeholder="Admin Password..."
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <input
                type="number"
                className="px-4 py-2 focus:outline-none border-b-2 border-gray-400 rounded-md text-black w-full"
                placeholder="Add Investment..."
                onChange={(e) => setInvestment(e.target.value)}
              />
              <button type="submit" className="btn bg-violet-600">
                <div className="flex items-center gap-3">
                  <MdAdminPanelSettings size={20} />
                  Add Shareholder
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="col h-[500px] bg-slate-100 p-5 rounded-lg dark:bg-zinc-800">
          <AdminBarChart adminData={adminData} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
