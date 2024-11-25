"use client"; // Ensures client-side rendering
import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";

function PostList({showAddPostForm}) {

  const Posts = useSelector((state)=>state.posts)

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {Posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          userName={post.username}
          likes={post.likes}
          date={post.date}
          content={post.content}
          id={post.id}
        />
      ))}
{showAddPostForm &&  
      <AddPostForm/>}
    </div>
  );
}

export default PostList;
