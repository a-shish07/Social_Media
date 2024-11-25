// pages/posts/[id].js
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectPosts } from '../../redux/slices/postsSlice';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the id from the URL
  const posts = useSelector(selectPosts);
  
  // Find the individual post based on the id
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
