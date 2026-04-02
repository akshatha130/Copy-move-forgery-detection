import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#7F7F7F] text-[#A3CCA3] shadow-md">
      <div className="text-3xl font-bold">MyLogo</div>
      <ul className="flex space-x-6 text-xl">
        <li>
          <a href="#" className="hover:text-white">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Login</a>
        </li>
        <li>
          <a
            href="#"
            className="bg-[#CFCFE6] text-[#7F7F7F] px-5 py-2 rounded-full font-semibold hover:bg-[#A3CCA3] hover:text-white transition"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}