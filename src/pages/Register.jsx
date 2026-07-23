import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await registerUser(formData);

      alert(res.data.message);

      navigate("/login");

    }catch (error) {
  console.log(error);
  console.log(error.response);

  alert(error.response?.data?.message || "Register Failed");
}
  };

return (
  <div className="relative flex min-h-screen items-center justify-center bg-[#f8fafc] px-4 py-6 sm:px-6 sm:py-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_45%)]"></div>

    <div
      className="
        relative w-full max-w-md
        rounded-[24px] sm:rounded-[28px]
        border border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,.08)]
        p-5 sm:p-8 md:p-10
      "
    >
      <div className="mb-6 text-center sm:mb-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 shadow-sm sm:mb-5 sm:h-16 sm:w-16">
          <span className="text-2xl sm:text-3xl">✨</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          AI Resume Analyzer
        </h1>

        <p className="mt-2 text-sm text-slate-500 sm:mt-3 md:text-base">
          Create your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-1 transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
            <FaUser className="mr-3 shrink-0 text-base text-sky-600 sm:text-lg" />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none sm:text-base"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>

          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-1 transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
            <FaEnvelope className="mr-3 shrink-0 text-base text-sky-600 sm:text-lg" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none sm:text-base"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-1 transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
            <FaLock className="mr-3 shrink-0 text-base text-sky-600 sm:text-lg" />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-transparent py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none sm:text-base"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="
            w-full rounded-2xl bg-sky-600
            py-3 sm:py-3.5
            text-sm sm:text-base
            font-semibold text-white
            shadow-[0_10px_25px_rgba(14,165,233,.25)]
            transition-all duration-300
            hover:scale-[1.01]
            hover:bg-sky-700
            hover:shadow-[0_14px_30px_rgba(14,165,233,.35)]
          "
        >
          Register
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500 sm:mt-6">
        Already have an account?
        <Link
          to="/login"
          className="ml-2 font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-800"
        >
          Login
        </Link>
      </p>
    </div>
  </div>
);
}

export default Register;
