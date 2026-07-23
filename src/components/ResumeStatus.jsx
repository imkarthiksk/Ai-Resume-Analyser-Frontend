function ResumeStatus({ resume }) {
  if (!resume) {
    return (
      <div
        className="
          rounded-2xl
          bg-white
          p-4
          shadow
          sm:p-5
          md:p-6
        "
      >
        <h2
          className="
            mb-4
            text-xl
            font-bold
            sm:text-2xl
          "
        >
          Resume Status
        </h2>

        <p className="text-sm text-gray-500 sm:text-base">
          Loading Resume...
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-3xl
        sm:p-6
        md:p-8
      "
    >
      <h2
        className="
          mb-4
          text-xl
          font-bold
          sm:text-2xl
        "
      >
        Resume Status
      </h2>

      <div
        className="
          space-y-3
          text-sm
          break-words
          sm:text-base
        "
      >
        <p>✅ Resume Uploaded Successfully</p>

        <p>
          💼 Role Detected :
          <span className="font-bold text-blue-700">
            {" "}
            {resume.role}
          </span>
        </p>

        <p>
          👨‍💻 Experience :
          <span className="font-bold text-blue-700">
            {" "}
            {resume.experience}
          </span>
        </p>

        <p>
          📊 ATS Score :
          <span className="font-bold text-green-600">
            {" "}
            {resume.analysis?.atsScore || 0}%
          </span>
        </p>
      </div>
    </div>
  );
}

export default ResumeStatus;