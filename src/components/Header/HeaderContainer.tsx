import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType={

    isAuth:boolean
    login: string | null
}

type MapDispatchToProps={
    getAuthUserData: ()=>void
}

export type AuthPropsType= MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login,
})

export default connect(mapStateToProps,
    {getAuthUserData}) (HeaderContainer);
