import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://go.imgsmail.ru/imgpreview?key=28651f27816ee8f0&mb=imgdb_preview_exp'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
}
export default Header;
