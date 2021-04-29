import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    InitialStateType,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

type MapStateToPropsType = {
    usersPage: InitialStateType
    users: Array<any>,
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress:(isFetching: boolean, userId: number)=>void
    getUsers: (pageNumber: number, pageSize: number)=> void
    //onPageChanged:(currentPage: number)=> void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
            usersPage={this.props.usersPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            pageSize={this.props.pageSize}
        />
    </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(
    mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}
)(UsersContainer)