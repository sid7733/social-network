import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileImage from '../../../assets/images/profile.jpg'
import {Preloader} from "../../common/preloader/Preloader";
import {InitialStateType, ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoProps={
    profile: ProfileType | null
}


const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader />
    }


    return (
        <div>
            <div>
                <img src={ProfileImage} />
            </div>
            <div className ={s.descriptionBlock}>
               <img src={props.profile.photos.large}/>
                {props.profile.contacts}
                {props.profile.lookingForAJob}
                {props.profile.lookingForAJobDescription}
                {props.profile.fullName}
                {props.profile.userId}
            </div>
        </div>
    );
}

export default ProfileInfo;