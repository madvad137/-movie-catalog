import axios from "axios";

export class FilmInformationService{

    getSimilarFilms = async (filmId) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '836aaa97-230e-4646-895c-2da02500fcde',
             } 
        })
        return response.data
    }

    getFilmInformation = async (filmId) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '836aaa97-230e-4646-895c-2da02500fcde',
             } 
        })
        return response.data
    }
}

