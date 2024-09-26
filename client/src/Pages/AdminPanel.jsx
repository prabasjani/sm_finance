import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiPayMoney } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminPanel = () => {
  // Add Investment
  const [addInvestment, setAddInvestment] = useState(0);
  const navigate = useNavigate();
  const response = async () => {
    const admin = await axios.get("http://localhost:5000/api/admin/all-admins");
    await axios.put(
      `http://localhost:5000/api/admin/add-investment/${admin?.data?.data?.[0]._id}`,
      {
        addInvestment,
      }
    );
  };
  const handleAddInvestment = (e) => {
    e.preventDefault();
    response();
    navigate("/");
  };
  useEffect(() => {
    response();
  }, []);

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
    navigate("/");
  };
  //   useEffect(() => {
  //     addAdmin();
  //   }, []);

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

            <form className="flex flex-col items-start gap-3">
              <Link to="/addCustomer" className="btn bg-red-600">
                <div className="flex items-center gap-3">
                  <FaUserPlus size={20} /> Add New Customer
                </div>
              </Link>
            </form>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default AdminPanel;
