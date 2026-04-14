
import FriendsCard from './FriendsCard';
import { PropagateLoader } from 'react-spinners';
import useData from '../../../hooks/useData';

const AllFriends = () => {


  const {friends,loading} = useData()

  if (loading) return <div className='flex justify-center'><PropagateLoader color='#244D3F' /></div>;

    return (

        <div>
         <div className=' text-4xl font-semibold my-10'>Your Friends</div>
         <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-15'>
            {
                friends.map(friend=> <FriendsCard key={friend.id} friend={friend}></FriendsCard> )
            }
         </div>
        </div>
    );
};

export default AllFriends;