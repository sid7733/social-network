import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileImage from '../../../assets/images/profile.jpg'
import {Preloader} from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {
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
               {props.profile.aboutMe}
                {props.profile.contacts}
                {props.profile.lookingForAJob}
                {props.profile.lookingForAJobDescription}
                {props.profile.fullName}
                {props.profile.userId}
                {props.profile.aboutMe}
            </div>
        </div>
    );
}

export default ProfileInfo;