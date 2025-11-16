import React from 'react';
import Header from '../../components/layout/Header';

const Users: React.FC = () => {
   return (
      <div className="container mx-auto p-4">
         <Header />
         <h1 className="text-4xl font-bold mb-6">Users</h1>
         {/* Users will be listed here */}
      </div>
   );
}

export default Users;