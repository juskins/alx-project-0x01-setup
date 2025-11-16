import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
   return (
      <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
         <h2 className="text-2xl font-bold mb-2">
            {user.name} <span className="text-sm text-gray-500">({user.username})</span>
         </h2>
         <p className="text-gray-700 mb-1">{user.email} · {user.phone}</p>
         <p className="text-gray-700 mb-2">{user.address.city} — {user.address.street}</p>
         <p className="text-gray-700 mb-2">Company: <strong>{user.company.name}</strong></p>
         <a className="text-blue-500 hover:underline" href={`http://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
         </a>
      </div>
   );
};

export default UserCard;
