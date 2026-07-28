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
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 md:grid md:grid-cols-3">

        {/* Left */}
        <div className="hidden sm:block">
          <p className="text-xs text-slate-500">
            Welcome Back 👋
          </p>
        </div>

        {/* Center */}
        <div className="flex justify-start md:justify-center">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            SmartHire AI
          </h2>
        </div>

        {/* Right */}
        <div className="flex justify-end">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">

            <FaBell className="cursor-pointer text-base text-slate-600 transition hover:text-slate-900 sm:text-lg md:text-xl" />

            <img
              src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
              alt="Profile"
              className="h-8 w-8 rounded-full border border-slate-200 shadow-sm sm:h-9 sm:w-9 md:h-10 md:w-10"
            />

            <button
              onClick={() => navigate("/profile")}
              className="rounded-lg border border-sky-600 px-2.5 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-50 sm:px-3 sm:py-2 sm:text-sm md:px-4"
            >
              <span className="hidden sm:inline">Edit Profile</span>
              <span className="sm:hidden">Profile</span>
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-3 sm:py-2 sm:text-sm md:px-4"
            >
              <span className="hidden sm:inline">Logout</span>
              <span className="sm:hidden">Exit</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
