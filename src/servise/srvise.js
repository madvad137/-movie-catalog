import axios from "axios";

export class Servise{

    getPopularFilm = async (pageCount) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageCount}`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '596d72cf-8e61-420b-85b7-77ec24577eae',
             } 
        })
        return response.data
    }

    getFoundFilms = async (text) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${text}`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '596d72cf-8e61-420b-85b7-77ec24577eae',
             } 
        })
        return response.data
    }
}


