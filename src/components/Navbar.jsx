import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    navigate("/login");

  };

   return (
  <div className="w-full border-b border-slate-200 bg-white/70 px-3 py-3 backdrop-blur-xl sm:px-4 md:h-16 md:px-6">
    <div className="mx-auto flex h-full max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">

      {/* Left */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
          SmartHire AI
        </h2>

        <p className="text-xs text-slate-500">
          Welcome Back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto sm:gap-3 md:gap-4">

        <FaBell className="cursor-pointer text-lg text-slate-600 transition hover:text-slate-900 md:text-xl" />

        <img
          src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
          alt="Profile"
          className="h-9 w-9 rounded-full border border-slate-200 shadow-sm md:h-10 md:w-10"
        />

        <button
          onClick={() => navigate("/profile")}
          className="
            rounded-lg
            border border-sky-600
            px-3 py-2
            text-xs sm:text-sm
            font-semibold
            text-sky-700
            transition
            hover:bg-sky-50
            md:px-4
          "
        >
          Edit Profile
        </button>

        <button
          onClick={handleLogout}
          className="
            rounded-lg
            bg-slate-900
            px-3 py-2
            text-xs sm:text-sm
            font-semibold
            text-white
            transition
            hover:bg-slate-800
            md:px-4
          "
        >
          Logout
        </button>

      </div>

    </div>
  </div>
);
}

export default Navbar;