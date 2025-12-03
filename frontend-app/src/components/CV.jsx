// src/components/CV.jsx
import React from "react";

function CV() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-white to-amber-50/40 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white/90 border border-amber-100 rounded-2xl shadow-xl px-8 py-10 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          My Resume
        </h1>

        {/* Small description */}
        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Here’s a quick way to get my latest resume.  
          You can download it to keep a copy with you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Download button */}
          <a
            href="/resume.pdf"   // change to /cv.pdf or your file name in public/
            download
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition"
          >
            ⬇️ Download my resume
          </a>

          {/* View online button (optional) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-amber-400 text-amber-700 font-semibold bg-amber-50 hover:bg-amber-100 transition"
          >
            👀 View resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
