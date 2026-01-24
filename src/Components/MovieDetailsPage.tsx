import { useParams } from "react-router-dom";
import { tmdbMovies, tmdbPopularMoviesImg } from "../Utils/axiosInstance";
import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import netflixLogo from "/Netflix-Logo.png";

// Defining the Movie Details by typeScript
interface MovieDetails {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
}

const MovieDetailsPage = () => {
  // Getting movieid from the url(useParams hook for getting the data from URL)
  const { movieid } = useParams();

  // useState Hook for assigning the movie details to the variable
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  // UseEffect Hook for fetching specific Movie Details
  useEffect(() => {
    const specificMovieDetails = async () => {
      try {
        const response = await tmdbMovies.get(`/movie/${movieid}`);
        setMovieDetails(response.data);
      } catch (err) {
        console.log("Getting error, can't fetch Movie Details", err);
      }
    };

    // calling the specificMovieDetails function here
    specificMovieDetails();
  }, [movieid]);

  return (
    <>
      {/*Netflix Logo */}
      <div className="relative w-full h-full">
        <img
          src={netflixLogo}
          alt="Netflix-Logo"
          className="absolute top-5 left-20 w-40 h-auto"
        />
      </div>

      {/*Section Starts from Here*/}
      <section className="min-h-screen flex justify-center items-center p-4">
        {/*Movie Poster */}
        <div className="flex justify-center items-center gap-10">
          <div className="p-4">
            <img
              src={`${tmdbPopularMoviesImg}${movieDetails?.poster_path}`}
              alt={movieDetails?.original_title}
              className="w-52 h-auto object-center object-cover rounded-md shadow-xl"
            />
          </div>

          {/*Movie Details */}
          <div className="p-4 space-y-10">
            <h1 className="text-5xl font-bold text-center">
              {movieDetails?.original_title}
            </h1>
            <p className="text-md text-center max-w-2xl">
              {movieDetails?.overview}
            </p>
            <div className="flex justify-around items-center gap-5 font-bold text-center bg-[#111111] rounded-lg py-1">
              <div className="flex items-center">
                <p className="text-white mr-2">Rating</p>
                <RiStarSFill className="text-amber-500 size-8" />
                <RiStarSFill className="text-amber-500 size-8" />
                <p className="text-2xl text-white ml-2">
                  {movieDetails?.vote_average}
                </p>
              </div>

              <button className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold cursor-pointer">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetailsPage;
