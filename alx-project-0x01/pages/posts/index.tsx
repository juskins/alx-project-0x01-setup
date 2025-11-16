import React from 'react';
import Header from '../../components/layout/Header';

const Posts: React.FC = () => {
   return (
      <div className="container mx-auto p-4">
         <Header />
         <h1 className="text-4xl font-bold mb-6">Posts</h1>
         {/* Posts will be listed here */}
      </div>
   );
}

export default Posts;