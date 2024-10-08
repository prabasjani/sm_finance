import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminBarChart = ({ adminData }) => {
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
            <Bar dataKey="investment" fill="#FEB941" stroke="#ff0000" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AdminBarChart;
