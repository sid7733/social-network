import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType={
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to="/login"/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent);