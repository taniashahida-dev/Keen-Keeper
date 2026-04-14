import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';
import { PropagateLoader } from 'react-spinners';

const AllFriends = () => {

 const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className='flex justify-center'><PropagateLoader color='#244D3F' /></div>;

    return (

        <div>
         <div className=' text-4xl font-semibold my-10'>Your Friends</div>
         <div>
            {
                friends.map(friend=> <FriendsCard key={friend.id} friend={friend}></FriendsCard> )
            }
         </div>
        </div>
    );
};

export default AllFriends;