import { useNavigate } from "react-router-dom";

function InterviewCompleted() {
  const navigate = useNavigate();
const userId = localStorage.getItem("userId");

const report =
  JSON.parse(localStorage.getItem(`interviewReport_${userId}`)) || {};

const company =
  JSON.parse(localStorage.getItem(`companyInterviewCompany_${userId}`)) || {};

  const overallScore = report.overallScore || 0;

return (
  <div className="min-h-screen bg-[#f8fafc] p-3 sm:p-4 md:p-6 lg:p-8 text-slate-900">
    <div className="mx-auto flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,.07)]">

        {/* Header */}
        <div className="border-b border-slate-100 pb-6 text-center">
          <div className="text-5xl sm:text-6xl">🤝</div>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
            Interview Completed
          </h1>

          <p className="mt-2 text-sm md:text-base text-slate-500">
            Congratulations! Your interview has been successfully evaluated.
          </p>
        </div>

        {/* Details */}
        <div className="mt-6 md:mt-8 space-y-4">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 md:px-5 md:py-4">
            <h2 className="text-sm md:text-base font-semibold text-slate-600">
              Company
            </h2>

            <span className="break-words text-sm md:text-base font-medium text-slate-900">
              {company.company || "-"}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 md:px-5 md:py-4">
            <h2 className="text-sm md:text-base font-semibold text-slate-600">
              Role
            </h2>

            <span className="break-words text-sm md:text-base font-medium text-slate-900">
              {company.role || "-"}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 md:px-5 md:py-4">
            <h2 className="text-sm md:text-base font-semibold text-slate-600">
              Overall Score
            </h2>

            <span className="text-xl md:text-2xl font-bold text-sky-700">
              {overallScore}%
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 md:mt-10 border-t border-slate-100 pt-6 flex flex-col md:flex-row gap-3 justify-center">

          <button
            onClick={() => navigate("/report")}
            className="w-full md:w-auto rounded-2xl bg-sky-600 px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-white shadow-[0_10px_25px_rgba(14,165,233,.25)] transition-all duration-300 hover:bg-sky-700 hover:scale-[1.01] hover:shadow-[0_14px_30px_rgba(14,165,233,.35)]"
          >
            📄 View Detailed Report
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full md:w-auto rounded-2xl border border-slate-200 bg-white px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:scale-[1.01]"
          >
            View Dashboard →
          </button>

        </div>

      </div>
    </div>
  </div>
);
}

export default InterviewCompleted;
