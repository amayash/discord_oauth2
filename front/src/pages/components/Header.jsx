import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={"/"}>Главная</Link>
            <Link to={"/login"}>Регистрация</Link>
        </header>
    );
};

export default Header;