import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { dashboardDetails } from "../utils/dashboard";

const Dashboard = () => {
  const [investmentInfo, setInvestmentInfo] = useState(0);
  const response = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/investment-info"
    );
    setInvestmentInfo(res);
  };
  useEffect(() => {
    response();
  }, []);

  return (
    <div className="w-full px-16 py-10 grid grid-cols-2 gap-5 dark:bg-black">
      {dashboardDetails.map((dashboardDetail, index) => {
        return (
          <div className="col" key={index}>
            <div
              className={`p-10 flex flex-col gap-5 mr-5 items-start rounded-md shadow-xl bg-gray-500 text-white transition hover:shadow-2xl hover:scale-105`}
            >
              <div className="flex items-center gap-3">
                {<dashboardDetail.logo size={40} />}
                <h1 className="text-2xl font-bold">{dashboardDetail.title}</h1>
              </div>
              <h1 className="text-5xl font-semibold">
                &#8377;.
                {investmentInfo?.data?.[
                  dashboardDetail?.result
                ]?.toLocaleString()}
              </h1>
              <Link
                to={dashboardDetail.fulInfo}
                className="text-sm text-gray-200"
              >
                View more...
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
