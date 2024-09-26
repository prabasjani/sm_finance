import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("light");
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };
  return (
    <div className="px-20 py-8 flex items-center justify-between bg-slate-100 dark:bg-zinc-800 dark:text-white">
      <a href="" className="text-2xl font-extrabold">
        <span className="tracking-widest">TPAK</span> Finance
      </a>
      <div className="flex items-center gap-10">
        <h1 className="font-semibold text-3xl">
          <span>&#128075;</span> Welcome Mr.Prabanjan
        </h1>
        <button
          className="p-2 border shadow-lg rounded-full"
          onClick={toggleDarkMode}
        >
          {darkMode === "dark" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <IoMoonOutline size={20} />
          )}
        </button>
        <button className="btn bg-red-500 text-white font-bold flex items-center gap-2 hover:bg-red-600">
          Logout <MdLogout />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
