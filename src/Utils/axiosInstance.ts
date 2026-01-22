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

// Endpoint for fetching popular movies Images
export const tmdbPopularMoviesImg = "https://image.tmdb.org/t/p/w500"

export const tmdbPopularMoviesVideos = `${TMDB_CONFIG.BASE_URL}/movie/1306368/videos`

