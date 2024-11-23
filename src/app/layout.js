import Header from "@/components/Header";
import "./globals.css";
import AddPostForm from "@/components/AddPostForm";
import Post from "@/components/post";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {/* <AddPostForm/> */}
        <Post/>
      </body>
    </html>
  );
}
