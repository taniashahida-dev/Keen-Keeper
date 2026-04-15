import React, { useContext } from 'react';
import { FriendProvider } from '../../Contexts/Contexts';
import CallCard from './CallCard';
import TextCard from './TextCard';
import VedioCard from './VedioCard';

const TimeLine = () => {
    const {call,text,vedio} = useContext(FriendProvider)
    return (
        <div className='bg-gray-50 py-6'>
          <div className='w-10/12 mx-auto'>
             <div className='text-4xl font-bold py-4'>Timeline</div>
          

<div>
    {
    call.map(data=> <CallCard data={data} key={data.id}></CallCard> )
}
    {
    text.map(data=> <TextCard data={data} key={data.id}></TextCard> )
}
    {
    vedio.map(data=> <VedioCard data={data} key={data.id}></VedioCard> )
}
</div>

           </div>
          </div>
       
    );
};

export default TimeLine;