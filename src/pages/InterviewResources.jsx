import { useLocation } from "react-router-dom";

function InterviewResources() {
  const locationData = useLocation();
  const state = locationData.state || {};

  const company = state.company || "Not Selected";
  const role = state.role || "Not Selected";
  const location = state.location || "Not Selected";
  const experience = state.experience || "Fresher";
  const type = state.type || "Technical";

  let websites = [];

  if (type === "Technical") {
    websites = [
      {
        name: "Glassdoor",
        description: "Real Technical Interview Experience",
        url: `https://www.google.com/search?q=${company}+${role}+Technical+Interview+Glassdoor`,
      },
      {
        name: "GeeksforGeeks",
        description: "Technical Interview Questions",
        url: `https://www.google.com/search?q=${role}+GeeksforGeeks+Interview`,
      },
      {
        name: "InterviewBit",
        description: "Programming Interview Questions",
        url: `https://www.google.com/search?q=${role}+InterviewBit`,
      },
      {
        name: "Guru99",
        description: "Technical Questions",
        url: `https://www.google.com/search?q=${role}+Guru99`,
      },
      {
        name: "TutorialsPoint",
        description: "Technical Tutorials",
        url: `https://www.google.com/search?q=${role}+TutorialsPoint`,
      },
      {
        name: "PrepInsta",
        description: "Company Technical Questions",
        url: `https://www.google.com/search?q=${company}+${role}+PrepInsta`,
      },
      {
        name: "YouTube",
        description: "Technical Mock Interview",
        url: `https://www.youtube.com/results?search_query=${company}+${role}+Technical+Interview`,
      },
      {
        name: "LinkedIn",
        description: "Interview Experiences",
        url: `https://www.google.com/search?q=${company}+${role}+LinkedIn+Interview`,
      },
    ];
  } else if (type === "HR") {
    websites = [
      {
        name: "Glassdoor",
        description: "HR Interview Questions",
        url: `https://www.google.com/search?q=${company}+${role}+HR+Interview+Glassdoor`,
      },
      {
        name: "Indeed",
        description: "HR Interview Questions",
        url: `https://www.google.com/search?q=${company}+${role}+Indeed+Interview`,
      },
      {
        name: "AmbitionBox",
        description: "HR Interview Experience",
        url: `https://www.google.com/search?q=${company}+${role}+AmbitionBox`,
      },
      {
        name: "LinkedIn",
        description: "Career Preparation",
        url: `https://www.google.com/search?q=${role}+LinkedIn+Interview`,
      },
      {
        name: "Quora",
        description: "Real HR Experiences",
        url: `https://www.google.com/search?q=${company}+${role}+Quora+Interview`,
      },
      {
        name: "YouTube",
        description: "HR Mock Interview",
        url: `https://www.youtube.com/results?search_query=${role}+HR+Interview`,
      },
      {
        name: "Google Search",
        description: "HR Questions",
        url: `https://www.google.com/search?q=${company}+${role}+HR+Questions`,
      },
    ];
  } else if (type === "Managerial") {
    websites = [
      {
        name: "LinkedIn",
        description: "Leadership Questions",
        url: `https://www.google.com/search?q=${company}+${role}+Managerial+Interview`,
      },
      {
        name: "Glassdoor",
        description: "Manager Round",
        url: `https://www.google.com/search?q=${company}+Manager+Interview+Glassdoor`,
      },
      {
        name: "Harvard Business Review",
        description: "Leadership Preparation",
        url: "https://hbr.org",
      },
      {
        name: "YouTube",
        description: "Managerial Interview",
        url: `https://www.youtube.com/results?search_query=${role}+Managerial+Interview`,
      },
    ];
  } else if (type === "Behavioral") {
    websites = [
      {
        name: "STAR Method",
        description: "Behavioral Interview Guide",
        url: "https://www.google.com/search?q=STAR+Interview+Method",
      },
      {
        name: "Glassdoor",
        description: "Behavioral Questions",
        url: `https://www.google.com/search?q=${company}+Behavioral+Interview`,
      },
      {
        name: "Indeed",
        description: "Behavioral Questions",
        url: `https://www.google.com/search?q=${role}+Behavioral+Interview`,
      },
      {
        name: "YouTube",
        description: "Behavioral Mock Interview",
        url: `https://www.youtube.com/results?search_query=${role}+Behavioral+Interview`,
      },
    ];
  } else {
    websites = [
      {
        name: "Google Search",
        description: "Interview Questions",
        url: `https://www.google.com/search?q=${company}+${role}+Interview`,
      },
      {
        name: "Glassdoor",
        description: "Interview Experience",
        url: `https://www.google.com/search?q=${company}+${role}+Glassdoor`,
      },
      {
        name: "Indeed",
        description: "Interview Questions",
        url: `https://www.google.com/search?q=${company}+${role}+Indeed`,
      },
      {
        name: "LinkedIn",
        description: "Career Preparation",
        url: `https://www.google.com/search?q=${role}+LinkedIn`,
      },
    ];
  }

return (
  <div className="min-h-screen bg-[#f8fafc] p-3 sm:p-4 md:p-6 text-slate-900">
    <div className="mx-auto max-w-6xl">

      {/* Header */}
      <div className="mb-5 rounded-[24px] sm:rounded-[28px] border border-slate-200 bg-white p-4 sm:p-5 md:mb-8 md:p-6 shadow-[0_16px_45px_rgba(15,23,42,.07)]">

        <h1 className="bg-gradient-to-r from-sky-700 via-blue-600 to-sky-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent">
          📚 Interview Resources
        </h1>

        <p className="mt-2 text-sm md:text-base text-slate-500">
          Curated resources to help you prepare.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 text-sm sm:grid-cols-2 md:text-base">
          <p className="break-words">
            <span className="font-semibold text-slate-600">Company:</span>{" "}
            <span className="text-slate-900">{company}</span>
          </p>

          <p className="break-words">
            <span className="font-semibold text-slate-600">Role:</span>{" "}
            <span className="text-slate-900">{role}</span>
          </p>

          <p className="break-words">
            <span className="font-semibold text-slate-600">Location:</span>{" "}
            <span className="text-slate-900">{location}</span>
          </p>

          <p className="break-words">
            <span className="font-semibold text-slate-600">Experience:</span>{" "}
            <span className="text-slate-900">{experience}</span>
          </p>

          <p className="sm:col-span-2 break-words">
            <span className="font-semibold text-slate-600">
              Interview Type:
            </span>{" "}
            <span className="text-slate-900">{type}</span>
          </p>
        </div>
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {websites.map((site, index) => (
          <div
            key={index}
            className="
              group
              rounded-2xl
              border border-slate-200
              bg-white
              p-4 sm:p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:shadow-[0_14px_40px_rgba(15,23,42,.12)]
            "
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 break-words">
                {site.name}
              </h2>

              <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-sky-700">
                Resource
              </span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 break-words">
              {site.description}
            </p>

            <button
              onClick={() => window.open(site.url, "_blank")}
              className="
                mt-5
                w-full
                rounded-xl
                border border-sky-200
                bg-sky-50
                px-4 py-3
                text-sm sm:text-base
                font-semibold
                text-sky-700
                transition-all duration-300
                hover:bg-sky-600
                hover:text-white
              "
            >
              🌐 Open Website
            </button>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default InterviewResources; 