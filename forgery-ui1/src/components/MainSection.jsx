// MainSection.jsx
import React from "react";

export function MainSection() {
  return (
    <section className="relative text-gray-800 text-center min-h-[550px] flex items-center justify-center overflow-hidden bg-white">
      <img
        src="https://cdn.pixabay.com/photo/2025/02/07/13/00/ai-generated-9390013_1280.jpg"
        alt="Forgery detection"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      {/* Removed the gradient div that was blocking the image */}
      <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl mx-auto text-gray-900 leading-tight">
          Check Forgery in <span className="text-green-600 underline decoration-green-300 decoration-4">Images Instantly</span>
        </h1>
        <p className="text-xl md:text-2xl mt-6 max-w-2xl mx-auto text-gray-700 font-medium">
          Be cautious—<span className="text-green-700 font-bold">fake images can mislead</span>. Use our tool to verify authenticity.
        </p>
        <button className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Try Now
        </button>
      </div>
    </section>
  );
}

export function RoleSection() {
  return (
    <section className="py-20 px-6 text-center bg-gray-50 text-gray-800">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
        Choose Your <span className="text-green-600">Role</span>
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
        Select your profession to get a <span className="font-semibold text-gray-800">tailored experience</span>
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
        {/* Doctor Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
          <div className="h-2 bg-green-600" />
          <div className="p-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">I'm a <span className="text-green-600">Doctor</span></h3>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Upload a <span className="font-semibold text-gray-800">single medical image</span> to verify its authenticity and detect any signs of forgery or manipulation.
            </p>
            <button className="w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-md transition-all duration-300">
              Get Started →
            </button>
          </div>
        </div>

        {/* Researcher Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
          <div className="h-2 bg-green-500" />
          <div className="p-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">I'm a <span className="text-green-600">Researcher</span></h3>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Upload <span className="font-semibold text-gray-800">multiple images</span> for batch analysis and get <span className="font-semibold text-gray-800">structured results</span> for your research projects.
            </p>
            <button className="w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-md transition-all duration-300">
              Start Research →
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 p-4 bg-white rounded-xl max-w-2xl mx-auto shadow-sm border border-gray-200">
        <p className="text-gray-700 text-base md:text-lg font-medium">
          Upload <span className="font-bold text-green-600">1 image</span> to check output. For research, upload <span className="font-bold text-green-600">many images</span> and get structured results.
        </p>
      </div>
    </section>
  );
}