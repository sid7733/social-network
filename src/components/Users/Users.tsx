import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";


let Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                photoUrl: 'https://vokrug-tv.ru/pic/person/d/0/9/f/d09fc84f3e517a70e5223d4006a938c3.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 3,
                photoUrl: 'https://icdn.lenta.ru/images/2020/12/30/10/20201230105557812/pwa_list_rect_320_3c73451360bb5c45b188eb2719d077da.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
        ])
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                    
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    
                </span>
                </div>
            )
        }
    </div>
}

export default Users