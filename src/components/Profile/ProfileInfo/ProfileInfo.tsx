import React from 'react';
import ProfileImage from '../../../assets/images/profile.jpg'
import {Preloader} from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css';
import { ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoProps={
    profile: ProfileType | null
}




const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader />
    }


    return (
        <div>
           {/* <div>
                <img alt={"profile-image"}  src={ProfileImage} />
            </div>*/}
            <div className ={s.descriptionBlock}>
               <img alt={"profile-photos-large"} src={props.profile.photos.large}/>
                {props.profile.contacts.facebook}
                {props.profile.lookingForAJob}
                {props.profile.lookingForAJobDescription}
                {props.profile.fullName}
                {props.profile.userId}
                <ProfileStatus status={"Hello my friends"}/>
            </div>
        </div>
    );
}

export default ProfileInfo;