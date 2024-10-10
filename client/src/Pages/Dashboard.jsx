import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { dashboardDetails } from "../utils/dashboard";
import CustInfo from "./CustInfo";
import { AppContext } from "../Context/AppContext";

const Dashboard = () => {
  const [searchCust, setSearchCust] = useState("");
  const { investmentInfo } = useContext(AppContext);

  return (
    <div className="w-full px-16 py-10 flex flex-col gap-5 dark:bg-black">
      <div className="grid grid-cols-4 gap-5">
        {dashboardDetails.map((dashboardDetail, index) => {
          return (
            <div className="col" key={index}>
              <div
                className={`p-4 flex flex-col gap-2 items-start rounded-md shadow-xl  text-white transition hover:shadow-2xl hover:scale-105`}
                style={{ backgroundColor: dashboardDetail.bgColor }}
              >
                <div className="flex items-center gap-3">
                  {<dashboardDetail.logo size={20} />}
                  <h1 className="text-md font-bold">{dashboardDetail.title}</h1>
                </div>
                <h1 className="text-2xl font-bold">
                  &#8377;.
                  {investmentInfo?.[dashboardDetail?.result]?.toLocaleString()}
                </h1>
                <Link
                  to={dashboardDetail.fulInfo}
                  className="text-[10px] text-gray-200"
                >
                  View more...
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <input
          type="text"
          className="w-full px-10 py-3 border border-gray-400 focus:outline-none rounded-full tracking-widest"
          placeholder="Search customer by Entering Name or Mobile Number or Aadhar Number..."
          onChange={(e) => setSearchCust(e.target.value)}
        />
      </div>
      <CustInfo searchCust={searchCust} />
    </div>
  );
};

export default Dashboard;
