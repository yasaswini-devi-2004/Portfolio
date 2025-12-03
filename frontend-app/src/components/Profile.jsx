import React from "react";

function Profile() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-white to-amber-50/60 py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-black tracking-wide">
        Know About Me
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* Education */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-3 text-black">
            Education
          </h2>
          <p className="text-lg text-gray-800">
            CSE @ <span className="font-semibold">Amrita University</span> – 2027
          </p>
        </div>

        {/* Hobbies */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-3 text-black">
            Hobbies
          </h2>
          <ul className="space-y-1 text-lg text-gray-800">
            <li>Coding</li>
            <li>Singing</li>
            <li>Travelling</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-3 text-black">
            Skills
          </h2>

          <p className="text-sm text-gray-600 mb-4">Tech I work with:</p>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "Tailwind CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "EJS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-sm font-semibold text-gray-800 shadow-sm hover:bg-amber-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Mail */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            Mail
          </h2>
          <a
            href="mailto:yasaswinidevinimmagadda@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-amber-700 underline hover:text-orange-600 underline-offset-4 transition font-medium"
          >
            yasaswinidevinimmagadda@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            LinkedIn
          </h2>
          <p className="text-sm text-gray-600 mb-3">See my profile here</p>
          <a
            href="https://www.linkedin.com/in/yasaswini-devi-nimmagadda-ba475b2a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-amber-700 underline hover:text-orange-600 transition font-semibold underline-offset-4"
          >
            Yasaswini devi Nimmagadda
          </a>
        </div>

        {/* GitHub */}
        <div className="rounded-2xl backdrop-blur-md bg-white/80 border border-amber-200/60 shadow-md hover:shadow-lg hover:-translate-y-[2px] transition p-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            GitHub
          </h2>
          <p className="text-sm text-gray-600 mb-3">See my projects here</p>
          <a
            href="https://github.com/yasaswini-devi-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-amber-700 underline hover:text-orange-600 transition font-medium underline-offset-4"
          >
            Yasaswini
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
