import axios from "axios";
import { TMDB_CONFIG } from "./tmdb.config";

// Create an Axios instance for TMDB API
export const tmdbMovies = axios.create({
    baseURL : TMDB_CONFIG.BASE_URL,
    headers : {
        Accept : "application/json",
        Authorization : `Bearer ${TMDB_CONFIG.ACCESS_TOKEN}`
    }
})

// Endpoint for fetching popular movies
export const tmdbPopularMoviesUrl = "/movie/popular?language=en-US&page=1"