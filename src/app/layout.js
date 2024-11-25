"use client"; // Add this line at the top
import { Provider } from "react-redux";
import "./globals.css";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { store } from "@/redux/store";
import PostList from "@/components/PostList";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showAddPostForm, setShowAddPostForm] = useState(false); 

  const handleToggleForm = () => {
    setShowAddPostForm((prevState) => !prevState); 
  };

  return (
    <html lang="en">
      <body>

        <Provider store={store}>
          <Header showAddPostForm={showAddPostForm}
          handleToggleForm={handleToggleForm}
          />
          <PostList showAddPostForm={showAddPostForm}/>
        </Provider>
      </body>
    </html>
  );
}
