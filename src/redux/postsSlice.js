import { createSlice } from "@reduxjs/toolkit";

// Function to load posts from localStorage
const loadPostsFromLocalStorage = () => {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : null;
};

// Dummy posts to initialize when no data is in localStorage
const dummyPosts = [
  {
    id: "1",
    username:"Ashish",
    date:"23/11/2024",
    title: "Welcome to the Social Platform",
    content: "This is a social platform where you can share your posts containing Title, Content and Your Name. Click on the Add Post button on the header to create and share posts. You can also like and comment on any post. For commenting, you have to click on the Add Comment Button which appears after clicking on the comment button below of the post.",
    likes: 0,
    comments: [
      { id: "1",username:"Ashish", content: "This works fine!" },
    ],
  },
  {
    id: "2",
    username:"Ashish",
    date:"24/11/2024",
    title: "About Employee Forum",
    content: "Employee Forums is a community platform for Employees to network & engage with other professionals in their own Industry & Functional areas.These Forums are open for all to Network, discuss related topics, engage with other users & apply for jobs. Organisations can post jobs for free and search for the right Talent they need, post events & connect directly with the Job Seekers.",
    likes: 5,
    comments: [],
  },
  {
    id: "3",
    date:"24/11/2024",
    username:"Ashish",
    title: "ReactJs",
    content: "React is a JavaScript Library used to build user interfaces. It is developed by Facebook. It simplifies creating dynamic and interactive web apps with the help of component-based architecture, reusability, and efficient rendering with the JSX and virtualDOM.",
    likes: 2,
    comments: [],
  },
];

// Combine localStorage and dummy posts for initial state
const initialState = loadPostsFromLocalStorage() || dummyPosts;

// Function to save posts to localStorage
const savePostsToLocalStorage = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.unshift(action.payload); // Add new post to state
      savePostsToLocalStorage(state); // Update localStorage
    },
    likesIncrement: (state, action) => {
      const postId = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post) {
        post.likes += 1; // Increment likes
        savePostsToLocalStorage(state); // Update localStorage
      }
    },
    addcomments: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment); // Add new comment
        savePostsToLocalStorage(state); // Update localStorage
      }
    },
  },
});

export const { addPosts, likesIncrement, addcomments } = postsSlice.actions;
export default postsSlice.reducer;

// Selector to fetch comments by postId
export const selectCommentsByPostId = (state, postId) => {
  const post = state.posts.find((post) => post.id === postId);
  return post ? post.comments : [];
};
