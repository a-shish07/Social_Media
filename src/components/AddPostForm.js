"use client"; 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../redux/postsSlice";

function AddPostForm({setShowAddPostForm}) {

  const dispatch =useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.title || !formData.content) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    
    const newPost = {
      id: new Date().getTime(),  
      date: new Date().toLocaleDateString(),
      username: formData.username,
      title: formData.title,
      content: formData.content,
      likes: 0, 
      comments: [], 
    };

    dispatch(addPosts(newPost))

    alert("Post added successfully!");
    setFormData({ username: "", title: "", content: "" }); // Clear the form
    // setShowAddPostForm(false)
  };

  return (
    <div className="w-[100%] h-[100%] absolute flex items-center justify-center bg-white/5  top-[9%] left-[50%] translate-x-[-50%] backdrop-blur-md">
      <div

      className="w-[400px] p-6 bg-white shadow-lg rounded-lg ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your full name"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the title of the post"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Body
            </label>
            <textarea
              id="content"
              rows="4"
              placeholder="Write the content of the post"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
