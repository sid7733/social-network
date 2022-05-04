import React, {ComponentType} from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from "../../../redux/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type OwnProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
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

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)







