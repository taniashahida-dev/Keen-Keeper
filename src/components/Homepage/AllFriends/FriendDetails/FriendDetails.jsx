import React from 'react';
import { useParams } from 'react-router';
import useData from '../../../../hooks/useData';
import { PropagateLoader } from 'react-spinners';

const FriendDetails = () => {
    const {id} = useParams()
    console.log(id)
     const {friends,loading} = useData()
     const data = friends.find((friend)=> friend.id == id)
     console.log(data)
      if (loading) return <div className='flex justify-center'><PropagateLoader color='#244D3F' /></div>;
    return (
        <div>
        {
            data.name
        }
        </div>
    );
};

export default FriendDetails;