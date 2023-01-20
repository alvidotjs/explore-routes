import React from 'react';
import './Friend.css';

const Friend = ({friend}) => {
    const {name, email, username} = friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p><small>Username :{username}</small></p>
        </div>
    );
};

export default Friend;