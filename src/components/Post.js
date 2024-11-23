"use client"; // Ensures client-side rendering
import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';

function Post() {
  const [currentDate, setCurrentDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle comments dropdown

  // Use useEffect to set the current date after the component mounts
  useEffect(() => {
    const date = new Date().toLocaleDateString();
    setCurrentDate(date); // Update state with the current date
  }, []);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 mt-4">
      {/* Post Content */}
      <div>
        {/* Date */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>{currentDate || 'Loading...'}</span> {/* Render date dynamically */}
        </div>

        {/* Post Title */}
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">Boost your conversion rate</h2>

        {/* Post Body */}
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis, justo a dictum pharetra, orci mi
          placerat turpis, in commodo sapien elit eget urna. Nulla facilisi.
        </p>
      </div>

      {/* Like, Comment, and Author Info */}
      <div className="mt-4 flex justify-between items-center">
        {/* Like and Comment buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 hover:text-blue-700">
            <span role="img" aria-label="Like">👍 1 Like</span>
          </button>
          <button
            onClick={toggleDropdown}
            className="text-blue-500 hover:text-blue-700"
            aria-expanded={isDropdownOpen}
          >
            <span role="img" aria-label="Comment">💬 Comments</span>
          </button>
        </div>

        {/* Author Info */}
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-900">Author's Name</p>
        </div>
      </div>

      {/* Comment Section - Render only when open */}
      {isDropdownOpen && (
        <div
          className="transition-all duration-300 transform scale-y-100 opacity-100 mt-4 origin-top"
        >
          <CommentSection />
        </div>
      )}
    </div>
  );
}

export default Post;
