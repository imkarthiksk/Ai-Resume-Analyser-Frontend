import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [report, setReport] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
const userId = localStorage.getItem("userId");

const reportData =
JSON.parse(
localStorage.getItem(`interviewReport_${userId}`)
) || {};

const companyData =
JSON.parse(
localStorage.getItem(`companyInterviewCompany_${userId}`)
) || {};
    setReport(reportData);

    setCompany(companyData);

  }, []);

return (
  <div className="min-h-screen bg-[#f8fafc] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 text-slate-900 font-sans">
    <div className="mx-auto w-full max-w-7xl">
      <div className="rounded-2xl md:rounded-[28px] border border-slate-200 bg-white p-4 md:p-6 shadow-[0_16px_45px_rgba(15,23,42,.07)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(15,23,42,.1)]">
        <div className="mb-6">
          <h1 className="bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent">
            Dashboard
          </h1>

          <p className="mt-2 text-sm md:text-base text-slate-500">
            View your latest interview performance.
          </p>
        </div>

        <div className="rounded-2xl md:rounded-[24px] border border-slate-200 bg-slate-50 p-4 md:p-6 transition-all duration-300 hover:border-sky-200">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800">
              🚀 Latest Interview
            </h2>

            <div className="inline-flex w-fit items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
              Recent
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:shadow-sm">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                Company
              </p>

              <h3 className="break-words text-base sm:text-lg md:text-xl font-semibold text-slate-900">
                {company.company || "-"}
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:shadow-sm">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                Role
              </p>

              <h3 className="break-words text-base sm:text-lg md:text-xl font-semibold text-slate-900">
                {company.role || "-"}
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:shadow-sm">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                Interview Date
              </p>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                {report.date || "-"}
              </h3>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-4 md:p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-sm">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                Overall Score
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-700">
                {report.overallScore || 0}%
              </h3>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:justify-end">
            <button
              onClick={() => navigate("/history")}
              className="
                w-full md:w-auto
                rounded-2xl
                bg-sky-600
                px-6
                py-3
                text-sm
                md:text-base
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(14,165,233,.22)]
                transition-all
                duration-300
                hover:bg-sky-700
                hover:scale-[1.01]
                hover:shadow-[0_12px_26px_rgba(14,165,233,.3)]
              "
            >
              View History →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Dashboard;
