import React from "react";
import style from './FilmCard.module.css';
import { NavLink } from "react-router-dom";

const FilmCard = (props) =>{
    const {filmName, filmId, rating, poster} = props
    
    return(
        <NavLink  className={style.FilmCardLink} to={'/films/'+filmId}>
             <div className={style.filmCard}>
            <div className={style.filmImage}>
                <img src={poster} alt="" />
                {
                    rating && (<div className={rating <5 ? style.filmRaitingR : rating <7 ? style.filmRaitingY : style.filmRaitingG }>{rating}</div>)
                }  
            </div>
            <div className={style.filmName}>{filmName}</div>
        </div> 
        </NavLink>
    )
}

export default FilmCard;