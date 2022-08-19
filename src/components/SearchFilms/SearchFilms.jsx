import React, { useCallback, useEffect, useState } from "react";
import style from './SearchFilms.module.css'
import { Servise } from "../../servise/srvise";
import FilmCard from "../FilmCard/FilmCard";

const SearchFilms = () => {
    const [searchFilm, setSearchFilm] = useState(null)
    let inputElement = React.createRef()
    const servise = new Servise()
    let setFilmName = useCallback(async () => {
        try {
              const data = await servise.getFoundFilms(inputElement.current.value)
             setSearchFilm({
            items:data.films,
            totalPages:data.totalPages
            })
        }
        catch (error){
            console.error(error)
        }
      
   })

  useEffect(() =>{
    setFilmName()
  },[])

return(
    <div className={style.search}>
        <div className="container">
            <div className={style.searchSection}>
                <input className={style.movieInput}  placeholder="Найти что-то на сайте" ref={inputElement}/>
                <button className={style.movieBtn} onClick={setFilmName}>найти</button>
            </div>
            <div className={style.searchFilms}>
                {
                    searchFilm && searchFilm.items.map((item) => {
                        return(
                            <FilmCard filmName ={item.nameRu} filmId={item.filmId} key = {item.filmId} poster = {item.posterUrlPreview} rating={item.rating}></FilmCard>
                        )
                    })
                }    
            </div>   
        </div>
    </div>
)
}

export default SearchFilms