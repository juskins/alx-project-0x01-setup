import React from 'react';

const PostCard: React.FC = () => {
   return (
      <div className="border rounded-lg p-4 shadow-md">
         <h2 className="text-2xl font-bold mb-2">Post Title</h2>
         <p className="text-gray-700">This is a brief description of the post content.</p>
      </div>
   );
}

export default PostCard;