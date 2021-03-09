import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileImage from '../../../assets/images/profile.jpg'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={ProfileImage} />
            </div>
            <div className ={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;