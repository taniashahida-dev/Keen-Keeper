import React from 'react';

const Banner = () => {
    return (
         <div className="bg-gray-100 py-16">
     <div>
         <div className="w-10/12 mx-auto px-4 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>

       
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

     
        <button className="bg-[#244D3F] text-white px-6 py-2 rounded-md hover:bg-[#1e3f34] transition">
          + Add a Friend
        </button>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 ">

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-gray-500  mt-2">Total Friends</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-gray-500  mt-2">On Track</p>
          </div>
 
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-gray-500  mt-2">
              Interactions This Month
            </p>
          </div>

        </div>

      </div>
      <div className='w-10/12 mx-auto my-10'>
        <h1 className='text-3xl font-semibold'>All Friends</h1>
      </div>
     </div>
    </div>
    );
};

export default Banner;