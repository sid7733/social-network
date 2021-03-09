import React from 'react';
import {
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// export type MyPostsPropsType = {
//     store: ReduxStoreType
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionType) => void
// }

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost:() => void
    updateNewPostText:(text: string)=> void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText:(text: string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;