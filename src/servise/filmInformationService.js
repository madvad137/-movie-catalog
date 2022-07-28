import axios from "axios";

export class FilmInformationService{

    getSimilarFilms = async (filmId) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '596d72cf-8e61-420b-85b7-77ec24577eae',
             } 
        })
        return response.data
    }

    getFilmInformation = async (filmId) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '596d72cf-8e61-420b-85b7-77ec24577eae',
             } 
        })
        return response.data
    }
}

