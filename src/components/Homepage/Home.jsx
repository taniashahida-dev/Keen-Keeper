import React from 'react';
import Banner from './Banner';
import AllFriends from './AllFriends/AllFriends';

const Home = () => {
    return <>
   <div className=' bg-gray-100 '>
   <div className=' w-11/12 md:w-10/12 mx-auto'>
      <Banner/>
    <AllFriends/>
   </div>
   </div>
    </>
};

export default Home;