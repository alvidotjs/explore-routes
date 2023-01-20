import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>I have {friends.length} friends..</h1>
            {
                friends.map(friend => <Friends
                key={friend.id}
                friend={friend}
                ></Friends>)
            }
        </div>
    );
};

export default Friends;