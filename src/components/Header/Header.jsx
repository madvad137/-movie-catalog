import React, { useEffect, useContext } from "react"
import { NavLink } from "react-router-dom";
import { FilmContext } from "../context/context";
import header from './Header.module.css';

const Header = () =>{
    return(
    <header className={header.header}>
        <ul className={header.list}>
            <li className={header.item}>
                <NavLink to='/films'>Главная</NavLink>
            </li>
            <li className={header.item}>
                <NavLink to='/search'>Поиск</NavLink>
            </li>
        </ul>
    </header>
    )
}

export default Header