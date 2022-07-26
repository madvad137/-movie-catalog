import axios from "axios";

export class Servise{

    getPopularFilm = async (pageCount) => {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageCount}`,{
            headers : {
                'accept': 'application/json',
                'X-API-KEY': '836aaa97-230e-4646-895c-2da02500fcde',
             } 
        })
        return response.data
    }
}


