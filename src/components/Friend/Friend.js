import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetails = () => {
        let path = `/friend/${id}`;
        navigate(path)
    }

    return (
        <div>
            <h3>Name : {name}</h3>
            <button onClick={showFriendDetails}>{username} ID:{id}</button>
        </div>
    );
};

export default Friend;