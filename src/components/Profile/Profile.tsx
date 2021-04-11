import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType)=> void
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
}

export default Profile;