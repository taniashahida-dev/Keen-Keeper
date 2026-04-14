import React, { useEffect, useState } from 'react';

const useData = () => {

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
    return {friends,loading}
};

export default useData;