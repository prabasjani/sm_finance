import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export const dashboardDetails = [
  {
    logo: RiMoneyRupeeCircleFill,
    title: "Total Investment",
    result: "investment",
    fulInfo: "",
    bgColor: "yellow",
  },
  {
    logo: GiTakeMyMoney,
    title: "Available Money",
    result: "availableInvestment",
    fulInfo: "",
    bgColor: "violet",
  },
  {
    logo: GiPayMoney,
    title: "Total Credits",
    result: "totalCredit",
    fulInfo: "",
    bgColor: "red",
  },
  {
    logo: GiReceiveMoney,
    title: "Total Profit",
    result: "totalProfit",
    fulInfo: "",
    bgColor: "green",
  },
];
