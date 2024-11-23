import React from 'react';

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 p-4 shadow-md">
      <div className="flex justify-between items-center w-full">
        {/* Logo or Title */}
        <h1 className="text-white text-lg font-bold">Social Platform</h1>

        {/* Responsive Button */}
        <button className="px-4 py-2 bg-blue-800 text-white font-bold rounded-full border-2 hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-200 md:mx-4 text-sm md:text-base">
          Add Post
        </button>

        {/* User Info */}
        <h2 className="text-white font-bold md:mr-7 text-sm md:text-base">Ashish</h2>
      </div>
    </div>
  );
}

export default Header;
