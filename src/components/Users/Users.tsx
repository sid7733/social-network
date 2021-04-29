import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import { NavLink } from "react-router-dom";
import {InitialStateType} from "../../redux/users-reducer";

type UsersProps = {
    usersPage: InitialStateType
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress:(isFetching: boolean, userId: number)=>void
}


export const Users = (props:UsersProps) => {
    debugger
    let state = props.usersPage

    let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={state.currentPage === p ? styles.selectedPage: ''}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
        { props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile' + u.id}>
                        <img alt={"photos-small"} src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button disabled={state.followingInProgress.some(id =>id===u.id)}
                                      onClick={() => {props.unfollow( u.id)}}>Unfollow </button>
                            : <button disabled={state.followingInProgress.some(id=>id===u.id)}
                                      onClick={() => {props.follow( u.id)}}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>

                </span>
                </div>
            )
        }
    </div>
}