function WeaknessCard({ weaknesses = [] }) {
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
        ⚠ Weaknesses
      </h2>

      {weaknesses.length === 0 ? (
        <p className="text-sm text-slate-400">
          No weaknesses
        </p>
      ) : (
        <ul className="space-y-3">
          {weaknesses.map((item, index) => (
            <li
              key={index}
              className="
                rounded-xl
                border border-amber-200
                bg-amber-50
                px-4 py-3
                text-sm
                sm:text-base
                font-medium
                text-amber-800
                break-words
                transition-all duration-300
                hover:bg-amber-100
                hover:scale-[1.01]
              "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WeaknessCard;