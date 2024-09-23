import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

const Sidebar = () => {
  const [hideSideBar, setHideSideBar] = useState(false);

  return (
    <div
      className={`${
        hideSideBar ? "w-[120px] transition" : "w-1/5 transition"
      } h-[600px] px-16 py-10 flex flex-col gap-10 justify-center items-center relative transition-all delay-100 ease-in-out bg-slate-100`}
    >
      <div
        className={`p-4 ${
          hideSideBar ? "absolute top-5" : "absolute top-5 right-5"
        } rounded-lg  bg-white shadow-lg border border-gray-300`}
        onClick={() => setHideSideBar((prev) => !prev)}
      >
        <MdDoubleArrow
          size={25}
          className={`${
            hideSideBar ? `rotate-0` : `rotate-180`
          } transition-all delay-75 ease-in`}
        />
      </div>
      <div className="flex flex-col gap-10">
        <Link to="/" className="flex items-center gap-4">
          <MdDashboardCustomize size={25} />
          <p
            className={`${
              hideSideBar ? "hidden" : "block"
            } transform transition`}
          >
            Dashboard
          </p>
        </Link>
        <Link to="/custInfo" className="flex items-center gap-4">
          <FaUsers size={25} />
          <p className={`${hideSideBar ? "hidden" : "block"} `}>
            Customer Info
          </p>
        </Link>
        <Link to="/contact" className="flex items-center gap-4">
          <MdAdminPanelSettings size={25} />
          <p className={`${hideSideBar ? "hidden" : "block"} transition`}>
            Admin Panel
          </p>
        </Link>
        <Link to="/contact" className="flex items-center gap-4">
          <MdContacts size={25} />
          <p className={`${hideSideBar ? "hidden" : "block"} transition`}>
            Contact
          </p>
        </Link>
        <Link to="/about" className="flex items-center gap-4">
          <MdInfo size={25} />
          <p className={`${hideSideBar ? "hidden" : "block"} transition`}>
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
