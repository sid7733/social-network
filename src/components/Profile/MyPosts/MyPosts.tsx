import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: MyPostsPropsType) => {
    const postsElements =
        props.posts.map(p => <Post post={p}/>);

    const onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.target.value
        props.updateNewPostText(newPostText)      //??????????????????????????????
        // props.dispatch(updateNewPostTextActionCreator(newPostText))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                        placeholder='Enter your message'
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    );
}

export default MyPosts;