import {
  FaTachometerAlt,
  FaFileAlt,
  FaRobot,
  FaHistory,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <FaFileAlt />,
    },
    {
      name: "Interview Resources",
      path: "/interview",
      icon: <FaRobot />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded-xl shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-50
        h-screen
        w-72
        bg-white
        border-r border-slate-200
        shadow-xl
        transition-transform duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
        lg:z-30
      `}
      >
        {/* Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-6 py-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="animate-spin [animation-duration:4s]">
              ֎
            </span>
            AI Resume Analyzer
          </h1>
        </div>

        {/* Menu */}
        <nav className="mt-6 px-4 flex flex-col gap-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center
                gap-4
                px-4
                py-3
                rounded-xl
                transition

                ${
                  isActive
                    ? "bg-sky-600 text-white"
                    : "hover:bg-slate-100 text-slate-700"
                }
              `
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;