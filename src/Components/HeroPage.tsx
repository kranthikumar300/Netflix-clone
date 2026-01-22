import { useEffect, useState } from "react";
import {
  tmdbMovies,
  tmdbPopularMoviesUrl,
  tmdbPopularMoviesImg,
} from "../Utils/axiosInstance";
import HeroVideoPlay from "./HeroVideoPlay";

// Define Movie in typeScript
interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
}

const HeroPage = () => {
  //useState hook from storing the managing the popularMovies
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>([]);

  // useEffect Hook
  useEffect(() => {
    // Fetch popular movies from TMDB
    const popularMovies = async () => {
      try {
        const response = await tmdbMovies.get(tmdbPopularMoviesUrl);
        console.log(response.data.results);
        setPopularMoviesData(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    // Call popularMovies on component mount
    popularMovies();
  }, []);

  return (
    <>
      {/* Sending props(title and overview) to the HeroPage file */}
      <HeroVideoPlay
        title={popularMoviesData[0]?.original_title}
        overview={popularMoviesData[0]?.overview}
      />

      {/*Section start's Here */}
      <section className="min-h-screen bg-[#111111] py-10">
        <h1 className="text-3xl text-white font-bold px-8">Popular Movies</h1>

        <div className="grid grid-cols-5 gap-y-5">
          {popularMoviesData.map((Movie) => (
            <div key={Movie.id} className="flex-col">
              <div className="flex flex-col items-center py-2 gap-1">
                <img
                  src={`${tmdbPopularMoviesImg}${Movie.poster_path}`}
                  alt={Movie.original_title}
                  className="w-60 h-auto rounded-md cursor-pointer"
                />
                <h1 className="text-white text-lg text-center mt-1 font-semibold max-w-60">
                  {Movie.original_title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroPage;
