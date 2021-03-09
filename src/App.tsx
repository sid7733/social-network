import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {ActionType} from "./redux/store";
import {AppStateType, ReduxStoreType} from './redux/redux-store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer";


type AppPropsType ={
    // store:ReduxStoreType
    // state: AppStateType
    // dispatch: (action: ActionType)=>void
    // addPostCallback: (newPostText: string) => void
    // updateNewPostTextCallback: (newText: string) => void
}

const App: React.FC<AppPropsType> = (props) => {


  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>

          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>

          <Route path='/profile'
                 render={() => <MyPostsContainer
                     //Profile
                     // store={props.store}
                     // profilePage={props.store.getState().profilePage}
                     //  dispatch={props.store.dispatch.bind(props.store)}
                 />}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer
                     // store={props.store}
                     // dialogsPage={props.store.getState().dialogsPage}
                     // dispatch={props.store.dispatch.bind(props.store)}

                 />}/>

            <Route path='/users'
                   render={() => <UsersContainer/>}/>

        </div>
      </div>
  );
}

export default App;
