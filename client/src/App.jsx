import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddCustomer from "./Pages/AddCustomer";
import CustInfo from "./Pages/CustInfo";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/custInfo" element={<CustInfo />} />
          <Route path="/contact" element={<CustInfo />} />
          <Route path="/about" element={<CustInfo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
