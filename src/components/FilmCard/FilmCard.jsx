import React from "react";
import style from './FilmCard.module.css';
import { NavLink } from "react-router-dom";

const FilmCard = (props) =>{

    let rating = props.rating;
    let id =''+props.filmId

    return(
        <NavLink className={style.FilmCardLink} to={'/films/'+id}>
             <div className={style.filmCard}>
            <div className={(style.filmImage)}>
                <img src={props.poster} alt="" />
                {
                    rating && (<div className={rating <5 ? style.filmRaitingR : rating <7 ? style.filmRaitingY : style.filmRaitingG }>{props.rating}</div>)
                }
                
            </div>
            <div className={style.filmName}>{props.filmName}</div>
        </div> 
        </NavLink>
      
    )

}

export default FilmCard;