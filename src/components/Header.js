"use client";

import React, { useState } from "react";
import AddPostForm from "./AddPostForm";

function Header({handleToggleForm,showAddPostForm}) {
  
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 p-4 shadow-md">
        <div className="flex justify-between items-center w-full">
          {/* Logo or Title */}
          <h1 className="text-white text-lg font-bold">Social Platform</h1>

          {/* Conditional Add Post / Close Button */}
          <button
            onClick={handleToggleForm}
            className={`px-4 py-2 text-white font-bold rounded-full border-2 md:mx-4 text-sm md:text-base ${
              showAddPostForm
                ? "bg-red-500 hover:bg-red-700"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {showAddPostForm ? "Close Form" : "Add Post"}
          </button>

          {/* User Info */}
          <h2 className="text-white font-bold md:mr-7 text-sm md:text-base">Ashish</h2>
        </div>
      </div>

      {/* AddPostForm Section */}
      {/* {showAddPostForm && (
        <div className="mt-4">
          <AddPostForm 
          setShowAddPostForm={setShowAddPostForm}
          />
        </div>
      )} */}
    </div>
  );
}

export default Header;
