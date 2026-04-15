import React from 'react';
import callIcon from '../../assets/Images/call.png'

const CallCard = ({data}) => {
    return (
        <div className='flex gap-4
         bg-white rounded-2xl p-4 mb-4'>
            <img className='h-10' src={callIcon} alt="" />
           <div className='text-gray-500'>
             <p><span className='text-xl text-black font-semibold'>Call</span> with {data.name}</p>
             <p>March 21,2026</p>
           </div>
        </div>
    );
};

export default CallCard;