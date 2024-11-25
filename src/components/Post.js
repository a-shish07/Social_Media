"use client"; // Ensures client-side rendering
import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import { useDispatch } from 'react-redux';
import { likesIncrement } from '../redux/postsSlice';

function Post({id,date,title,content,likes,userName}) {
  const dispatch = useDispatch();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle comments dropdown




  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-3xl  bg-white shadow-lg rounded-lg p-4 mt-4 mx-7 mb-5">
      {/* Post Content */}
      <div>
        {/* Date */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>{date}</span> {/* Render date dynamically */}
        </div>
        

        {/* Post Title */}
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h2>

        {/* Post Body */}
        <p className="mt-2 text-gray-700">
         {content}
        </p>
      </div>

      {/* Like, Comment, and Author Info */}
      <div className="mt-4 flex justify-between items-center">
        {/* Like and Comment buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 hover:text-blue-700"
          onClick={()=>{dispatch(likesIncrement(id))}}
          >
            <span role="img" aria-label="Like">👍 {likes} Like</span>
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
          <p className="text-sm font-medium text-gray-900">{userName}</p>
        </div>
      </div>

      {/* Comment Section - Render only when open */}
      {isDropdownOpen && (
        <div
          className="transition-all duration-300 transform scale-y-100 opacity-100 mt-4 origin-top"
        >
          <CommentSection id={id}/>
        </div>
      )}
    </div>
  );
}

export default Post;
