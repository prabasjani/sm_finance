import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminBarChart = () => {
  const [adminData, setAdminData] = useState([]);
  const response = async () => {
    const admin = await axios.get("http://localhost:5000/api/admin/all-admins");
    setAdminData(admin?.data?.data);
  };
  useEffect(() => {
    response();
  }, []);
  return (
    <>
      {adminData && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={400}
            data={adminData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="adminName" />
            <YAxis />
            <Tooltip labelStyle={{ color: "#00ff00" }} />
            <Legend />
            <Line />
            <Bar dataKey="investment" fill="#ff5d7d" stroke="#ff0000" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AdminBarChart;
