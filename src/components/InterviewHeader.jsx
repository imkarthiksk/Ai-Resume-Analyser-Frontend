function InterviewHeader() {
  return (
    <div
      className="
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-700
        p-5
        sm:p-6
        md:p-8
        text-white
        shadow-lg
      "
    >
      <h1
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          break-words
        "
      >
        🤖 AI Interview Generator
      </h1>

      <p
        className="
          mt-3
          text-sm
          sm:text-base
          md:text-lg
          text-blue-100
          leading-relaxed
        "
      >
        Prepare exactly like real company interviews.
      </p>
    </div>
  );
}

export default InterviewHeader;