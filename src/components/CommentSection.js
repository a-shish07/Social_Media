"use client"; // Add this line at the top
import { addcomments, selectCommentsByPostId } from '../redux/postsSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CommentSection({id}) {
  const [comments, setComments] = useState({
    username: "",
    content: ""
  });
 
  const [isFormVisible, setIsFormVisible] = useState(false);


  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComments({ ...comments, [id]: value });
  };


  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comments.username || !comments.content) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const postId = id;

    dispatch(addcomments({postId,comment:comments}))
    setComments({username: "",  content: "" })
    setIsFormVisible(false); // Hide form after submission
  };

  // Toggle the form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const postComments = useSelector((state)=>selectCommentsByPostId(state,id))

  return (
    <div>
      {/* Comment List */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
        {postComments.length > 0 ? (
          postComments.map((comment, index) => (
            <div key={index} className="mt-2">
              <p className="text-sm font-semibold text-blue-500">{comment.username} commented:</p>
              <p className="text-gray-700 pl-4">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Add Comment Button */}
      <div className="mb-4">
        <button
          onClick={toggleFormVisibility}
          className="py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {isFormVisible ? 'Close Comment Form' : 'Add Comment'}
        </button>
      </div>

      {/* Add Comment Form - Dropdown */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isFormVisible ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        {isFormVisible && (
          <form onSubmit={handleAddComment} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner">
            {/* Username Input */}
            <div>
              <input
                type="text"
                value={comments.username}
                onChange={handleChange}
                placeholder="Your name"
                id='username'
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            {/* Comment Input */}
            <div>
              <textarea
                value={comments.content}
                onChange={handleChange}
                id='content'
                placeholder="Write a comment..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
                rows="3"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
