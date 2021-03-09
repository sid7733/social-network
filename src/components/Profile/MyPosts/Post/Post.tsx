import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/profile-reducer";


export type PostPropsType = {
    post: PostType
}

const Post = (props: PostPropsType) => {

    return (

        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'/>

            {props.post.message}
            <div>
                <span>like </span>
                {props.post.likesCount}
            </div>
        </div>


    );
}

export default Post;