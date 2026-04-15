import React, { useContext, useState } from 'react';
import { FriendProvider } from '../../Contexts/Contexts';
import CallCard from './CallCard';
import TextCard from './TextCard';
import VedioCard from './VedioCard';

const TimeLine = () => {
    const {call,text,vedio} = useContext(FriendProvider);

    // ✅ filter state
    const [filter, setFilter] = useState("all");

    const allActivities = [
        ...call.map(item => ({ ...item, type: "call" })),
        ...text.map(item => ({ ...item, type: "text" })),
        ...vedio.map(item => ({ ...item, type: "video" }))
    ];

    // ✅ filter logic
    const filteredActivities =
        filter === "all"
            ? allActivities
            : allActivities.filter(item => item.type === filter);

    return (
        <div className='bg-gray-50 py-6'>
            <div className='w-10/12 mx-auto'>

                <div className='text-4xl font-bold py-4'>Timeline</div>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded mb-4 "
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>

                <div>
                    {
                        filteredActivities.map((item) => {
                            if (item.type === "call") return <CallCard key={item.id} data={item} />;
                            if (item.type === "text") return <TextCard key={item.id} data={item} />;
                            if (item.type === "video") return <VedioCard key={item.id} data={item} />;
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default TimeLine;