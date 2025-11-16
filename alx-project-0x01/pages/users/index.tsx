import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';
import { UserProps } from '../../interfaces';

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [users, setUsers] = useState<UserProps[]>(posts);

   const handleAddUser = (newUser: UserProps) => {
      const userWithId = {
         ...newUser,
         id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
      };
      setUsers([...users, userWithId]);
   };

   return (
      <div className="container mx-auto p-4">
         <Header />
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Users</h1>
            <button
               onClick={() => setIsModalOpen(true)}
               className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
               Add User
            </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users && users.map((user) => (
               <UserCard key={user.id} user={user} />
            ))}
         </div>
         {isModalOpen && (
            <UserModal
               onClose={() => setIsModalOpen(false)}
               onSubmit={handleAddUser}
            />
         )}
      </div>
   );
}


export async function getStaticProps() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users")
   const posts = await response.json()

   return {
      props: {
         posts
      }
   }
}


export default Users;
