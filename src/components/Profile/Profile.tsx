import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType} from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType | null
}

const Profile = (props: ProfileProps) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
}

export default Profile;