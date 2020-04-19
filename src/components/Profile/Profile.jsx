import React from 'react';
import Posts from './Posts/Posts';
import c from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={c.content}>
            <Posts dataProfile={props.dataProfile} />
        </div>
    );
};

export default Profile