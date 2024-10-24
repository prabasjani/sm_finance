import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddCustomer from "./Components/AddCustomer";
import UpdateCustomer from "./Components/UpdateCustomer";
import CustInfo from "./Pages/CustInfo";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import AdminPanel from "./Pages/AdminPanel";
import UserHomePage from "./Pages/UserHomePage";
import UserInfo from "./Pages/UserInfo";
import Customer from "./Components/Customer";
import Investment from "./Components/Dashborad/Investment";
import Credits from "./Components/Dashborad/Credits";
import Profits from "./Components/Dashborad/Profits";
import Contact from "./Pages/Contact";
import AppContextProvider from "./Context/AppContext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Toaster richColors position="top-right" />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/investment" element={<Investment />} />
            <Route path="/dashboard/credits" element={<Credits />} />
            <Route path="/dashboard/profits" element={<Profits />} />
            <Route path="/addCustomer" element={<AddCustomer />} />
            <Route path="/updateCustomer/:id" element={<UpdateCustomer />} />
            <Route path="/custInfo" element={<CustInfo />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userInfo/:id" element={<UserInfo />} />
            <Route path="/dashboard/customer/:id" element={<Customer />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppContextProvider>
  );
};

export default App;
