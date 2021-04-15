import React from 'react';
import {
    addPost,
    PostType,
    updateNewPostText
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


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPost())
        },
        updateNewPostText:(text: string)=>{
            dispatch(updateNewPostText(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;