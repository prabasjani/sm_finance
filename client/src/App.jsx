import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddCustomer from "./Components/AddCustomer";
import CustInfo from "./Pages/CustInfo";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import AdminPanel from "./Pages/AdminPanel";
import UserHomePage from "./Pages/UserHomePage";
import UserInfo from "./Pages/UserInfo";
import Customer from "./Components/Customer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<UserHomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/custInfo" element={<CustInfo />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/contact" element={<CustInfo />} />
          <Route path="/about" element={<CustInfo />} />
          <Route path="/userInfo/:id" element={<UserInfo />} />
          <Route path="/customer/:id" element={<Customer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
