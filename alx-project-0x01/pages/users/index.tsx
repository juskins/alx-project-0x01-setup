import React from 'react';
import Header from '../../components/layout/Header';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
   return (
      <div className="container mx-auto p-4">
         <Header />
         <h1 className="text-4xl font-bold mb-6">Users</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts && posts.map((user) => (
               <UserCard key={user.id} user={user} />
            ))}
         </div>
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
