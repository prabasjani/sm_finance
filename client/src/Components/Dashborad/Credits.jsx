import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppContext } from "../../Context/AppContext";

const Credits = () => {
  const { customers } = useContext(AppContext);
  return (
    <div className="w-full p-10 h-[600px] dark:bg-zinc-900">
      {customers.length <= 0 ? (
        <h1 className="text-5xl font-bold text-center">
          No Customers List found
        </h1>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={400}
            data={customers}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="customerName" />
            <YAxis />
            <Tooltip labelStyle={{ color: "#00ff00" }} />
            <Legend />
            <Bar dataKey="creditAmount" fill="#E72929" stroke="#00ff00" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Credits;
