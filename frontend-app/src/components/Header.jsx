import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-300 text-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className=" text-2xl font-bold ">
          <span className="text-black">Sri</span>{" "}
          <span className="text-black">Lakshmi</span>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-12 items-center">
          <a href="/" className="text-black hover:text-gray-600">Home</a>
          <a href="/profile" className="text-black hover:text-gray-600">Profile</a>
          <a href="/feedback" className="text-black hover:text-gray-600">Feedback</a>
          <a href="/cv" className="text-black hover:text-gray-600">CV</a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4">
          <a
            href="/"
            className="block text-black hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="/profile"
            className="block text-black hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Profile
          </a>
          <a
            href="/feedback"
            className="block text-black hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Feedback
          </a>
          <a
            href="/cv"
            className="block text-black hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            CV
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
