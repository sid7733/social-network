import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";





let rerenderEntireTree =()=>{
    ReactDOM.render(
        <HashRouter>
            <Provider store ={store}>
            <App
                // state={store.getState() }
                // store={store}
                // dispatch={store.dispatch.bind(store.dispatch)}  //bind - связывать
            />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
//
// store.subscribe(()=> {
//     let state=store.getState()
//     rerenderEntireTree()
// })


