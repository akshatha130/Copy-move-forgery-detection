import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md border-b border-gray-200">
      <div className="text-3xl font-bold text-gray-800">
        My<span className="text-green-600">Logo</span>
      </div>
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-green-600 transition duration-200">
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-700 transition duration-200 shadow-sm"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}