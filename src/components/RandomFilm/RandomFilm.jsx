import React, { useCallback, useEffect, useState, useContext} from "react";
import FilmCard from "../FilmCard/FilmCard";
import style from './RandomFilm.module.css';
import { Servise } from "../../servise/srvise";
import { FilmContext } from "../context/context";

const RandomFilm = () =>{

    const {pageNumber,setPageNumber} = useContext(FilmContext)
    const [popularFilms, setPopularFilms] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const servise = new Servise()
    const getData = useCallback(async () => {
        setIsLoading(true)
        try {
            const data = await servise.getPopularFilm(pageNumber)
            setPopularFilms(data.films)  
            setIsLoading(false)
            
        }
        catch (error){
            console.error(error)
        }   
    }, [pageNumber])
    
    useEffect(() => {
        getData()
    }, [pageNumber])

    return(
        <section className={style.RandomFilm}>
            <div className="container">
                <h2 className={style.title}>Популярные фильмы</h2>
                <div className={style.mostPopular}>   
                {
                    isLoading && (<div>Loading...</div>) 
                }
                {
                    popularFilms && popularFilms.map((item) => {
                        return(
                            <FilmCard filmName ={item.nameRu} filmId={item.filmId} key = {item.filmId} poster = {item.posterUrlPreview} rating={item.rating} /> 
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                {
                    pageNumber>1 && (<button className={style.btn} onClick={() => {setPageNumber(pageNumber-1)}}>Назад</button>)
                }
                {
                    pageNumber<16 && ( <button className={style.btn} onClick={() =>{setPageNumber(pageNumber+1)}}>Вперед</button>)
                }
                </div> 
            </div>
        </section>
    )
}

export default RandomFilm;