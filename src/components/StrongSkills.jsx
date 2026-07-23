import { FaCheckCircle } from "react-icons/fa";

function StrongSkills({ skills = [] }) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-slate-200
        bg-white
        p-4
        sm:p-5
        md:p-6
        shadow-sm
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-[0_14px_40px_rgba(15,23,42,.12)]
      "
    >
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        💪 Strong Skills
      </h2>

      {skills.length === 0 ? (
        <p className="text-sm text-slate-400">
          No skills found
        </p>
      ) : (
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                flex items-center
                gap-2
                rounded-full
                border border-emerald-200
                bg-emerald-50
                px-3 py-2
                sm:px-4
                text-xs
                sm:text-sm
                font-medium
                text-emerald-700
                transition-all duration-300
                hover:bg-emerald-100
                hover:scale-105
                break-all
              "
            >
              <FaCheckCircle className="text-sm sm:text-base shrink-0" />
              <span className="break-all">{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StrongSkills;