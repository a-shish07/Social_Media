import Header from "@/components/Header";
import "./globals.css";
import AddPostForm from "@/components/AddPostForm";
import Post from "@/components/post";
import CommentSection from "@/components/CommentSection";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {/* <AddPostForm/> */}
        {/* <CommentSection/> */}
        <Post/>
      </body>
    </html>
  );
}
