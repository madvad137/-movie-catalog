import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { FilmInformationService } from "../../servise/filmInformationService";
import style from './FilmInformation.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FilmCard from "../FilmCard/FilmCard";



const FilmInformation = () =>{
const [filmInfo, setFilmInfo] = useState(null)
const {id} = useParams()
const filmInformationService = new FilmInformationService()
const getFullInformationFilm = useCallback(async () => {
    try {
        const similar = await filmInformationService.getSimilarFilms(id)
        const info = await filmInformationService.getFilmInformation(id)
            await setFilmInfo({similar:similar.items, info}) 
            console.log(similar.items)
    }
    catch (error){
        console.error(error)
    }   
},[])

useEffect(() =>{
    getFullInformationFilm()
},[id])
        
return(
    <div className={style.film}> 
        <div className="container">
            <div className={style.filmInfo}>
                <div className={style.filmImage}>
                    <img src={filmInfo && filmInfo.info.posterUrlPreview} alt="" />
                    <div className={style.filmRating}>{filmInfo && filmInfo.info.ratingKinopoisk}</div>
                </div>
                <div className={style.description}>
                    <div className={style.filmName}>{filmInfo && filmInfo.info.nameRu}</div>
                    <div className={style.descriptionItem}>Описание: {filmInfo && filmInfo.info.description}</div>
                    <div className={style.descriptionItem}>Жанры: {filmInfo && filmInfo.info.genres.map((item) => {
                            return(item.genre+', ')
                        })}
                    </div>
                    <div className={style.descriptionItem}>Год: {filmInfo && filmInfo.info.year}</div>
                    <div className={style.descriptionItem}>Страна: {filmInfo && filmInfo.info.countries.map((item) => {
                        return(item.country+ ', ')
                    })}</div>
                </div>
            </div>
        {
            filmInfo && (<div className={style.stills}>
        <div className={style.filmName}>Похожие фильмы</div>
        <Swiper
        className="slider"
            modules={[Navigation, Pagination]}
            slidesPerView={4}
            navigation>
            {
                filmInfo &&  filmInfo.similar.map((item) =>{
                    return(
                        <SwiperSlide className='swiperItem'>
                            <FilmCard filmName ={item.nameRu} filmId={item.filmId} key = {item.filmId} poster = {item.posterUrlPreview} rating={item.rating}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div> )
        }
        </div>
    </div>
)
}

export default FilmInformation