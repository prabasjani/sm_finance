import { MdLogout } from "react-icons/md";

const Navbar = () => {
  // &#128075;
  return (
    <div className="px-20 py-8 flex items-center justify-between bg-slate-100">
      <a href="" className="text-2xl font-extrabold">
        <span className="tracking-widest">TPAK</span> Finance
      </a>
      <div className="flex items-center gap-10">
        <h1 className="font-semibold text-3xl">
          <span>&#128075;</span> Welcome Mr.Prabanjan
        </h1>
        <button className="btn bg-red-500 text-white font-bold flex items-center gap-2 hover:bg-red-600">
          Logout <MdLogout />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
