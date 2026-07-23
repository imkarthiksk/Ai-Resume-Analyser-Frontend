import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function History() {

  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const userId = localStorage.getItem("userId");
  // Load History
  useEffect(() => {

    const data =
      JSON.parse(
        localStorage.getItem(`interviewHistory_${userId}`)
      ) || [];

    console.log("History Data:", data);

    setHistory(data);

  }, []);

  // Initialize AOS
  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  return (
  <div className="min-h-screen bg-[#f8fafc] p-3 sm:p-4 md:p-6 text-slate-900">
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-4 md:mb-8 rounded-[28px] border border-slate-200 bg-white p-4 md:p-6 shadow-[0_16px_45px_rgba(15,23,42,.07)]">
        <h1 className="bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-transparent">
          📜 Interview History
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-slate-500">
          Track all your previous AI Interview Reports.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 md:p-10 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
            No Interview History
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Complete your first interview to see reports here.
          </p>
        </div>
      ) : (
        <div className="space-y-4 md:space-y-6">
          {history.map((item, index) => (
            <div
              key={item.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="group rounded-[28px] border border-slate-200 bg-white p-4 md:p-6 shadow-[0_16px_45px_rgba(15,23,42,.07)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_55px_rgba(15,23,42,.1)]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-sky-500"></div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 break-words">
                      {item.company}
                    </h2>
                  </div>

                  <p className="mt-2 text-sm md:text-base font-medium text-slate-600 break-words">
                    💼 {item.role}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    📅 {item.date}
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col items-center lg:items-end gap-4">
                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-xl sm:text-2xl font-bold text-white shadow-[0_8px_25px_rgba(14,165,233,.35)]">
                    {item.overallScore}%
                  </div>

                  <button
                    onClick={() => {
                      localStorage.setItem(
                        `selectedInterview_${userId}`,
                        JSON.stringify(item)
                      );
                      navigate("/report");
                    }}
                    className="w-full sm:w-auto rounded-2xl bg-sky-600 px-5 md:px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(14,165,233,.25)] transition-all duration-300 hover:bg-sky-700 hover:scale-[1.01] hover:shadow-[0_14px_30px_rgba(14,165,233,.35)]"
                  >
                    📄 View Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}

export default History;
