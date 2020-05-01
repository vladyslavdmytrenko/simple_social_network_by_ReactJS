import React from 'react';
import Profile from "./Profile";

const ProfileContainer = (props) => {
    return <Profile
        dispatch={props.store.dispatch}
        dataProfile={props.store.getState().dataProfile}
    />
};

export default ProfileContainer