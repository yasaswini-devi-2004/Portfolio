import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-300 w-full py-6 text-center">
      <p className="text-black font-bold text-sm">
        © {new Date().getFullYear()} All copyrights reserved
      </p>
    </footer>
  );
}

export default Footer;
