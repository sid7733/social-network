import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoPropsType} from "../../redux/profile-reducer";


const Profile = (props: ProfileInfoPropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>

        </div>
    );
}

export default Profile;