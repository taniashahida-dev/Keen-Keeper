import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    return (
     
      <Link to={`/Friend/${friend.id}`} className="bg-white rounded-2xl shadow-lg p-2
       md:p-4 flex flex-col justify-center  items-center text-center">
        
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
          <img 
            src={friend.picture} // Replace with actual image URL
            alt="James Wright"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Time */}
        <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>
        <p className="text-sm text-slate-400 mb-4">{friend.days_since_contact}d ago</p>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
         {
            friend.tags.map((tag,i)=> <span key={i} className="px-2 md:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider">
          {tag}
          </span>)
         }
         
        </div>

        {/* Status Button */}
        <button className={` px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all text-white ${friend.status==="on-track"?"bg-[#1D3D33] ":friend.status==="overdue"?"bg-red-600":"bg-amber-500"}`}>
          {friend.status}
        </button>
      </Link>
   
    );
};

export default FriendsCard;