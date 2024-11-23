import React from 'react';

function Post() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4">

      {/* Post Content */}
      <div className="mt-4">
        {/* Date and Category */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>Today's Date</span>
        </div>

        {/* Post Title */}
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">Boost your conversion rate</h2>

        {/* Post Body */}
        <p className="mt-2 text-gray-700">
          Illo sint voluptates. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
          necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta labor
          incididunt.Illo sint voluptates. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo
          necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta labor
          incididunt. 
        </p>

        {/* Like, Comment, and Author Info */}
        <div className="mt-4 flex justify-between items-center">
          {/* Like and Comment buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-blue-500 hover:text-blue-700">
              <span role="img" aria-label="Like">👍1 Like</span>
            </button>
            <button className="text-blue-500 hover:text-blue-700">
              <span role="img" aria-label="Comment">💬 Comment</span>
            </button>
          </div>

          {/* Author Info */}
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900">Author's Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
