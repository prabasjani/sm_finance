import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export const dashboardDetails = [
  {
    logo: RiMoneyRupeeCircleFill,
    title: "Total Investment",
    result: "investment",
    fulInfo: "/investment",
    bgColor: "#FEB941",
  },
  {
    logo: GiTakeMyMoney,
    title: "Available Money",
    result: "availableInvestment",
    fulInfo: "",
    bgColor: "#AD49E1",
  },
  {
    logo: GiPayMoney,
    title: "Total Credits",
    result: "totalCredit",
    fulInfo: "/credits",
    bgColor: "#E72929",
  },
  {
    logo: GiReceiveMoney,
    title: "Total Profit",
    result: "totalProfit",
    fulInfo: "/profits",
    bgColor: "#06D001",
  },
];
