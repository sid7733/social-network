import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppPropsType ={

}

const App: React.FC<AppPropsType> = (props) => {


  return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>

          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>

          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>

          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>

            <Route path='/users'
                   render={() => <UsersContainer/>}/>

        </div>
      </div>
  );
}

export default App;
