import React, {ComponentType} from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    ProfileType,
    updateStatus
} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../../redux/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string,
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string,
}

export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)







