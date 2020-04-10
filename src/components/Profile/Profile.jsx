import React from 'react';
import Posts from './Posts/Posts';
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div className={c.content}>
            <img src="" alt=""/>
            <Posts />
        </div>
    );
};

export default Profile