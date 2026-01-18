import { useEffect } from "react";
import { tmdbMovies, tmdbPopularMoviesUrl } from "./Utils/axiosInstance";

const HeroPage = () => {

  // Fetch popular movies from TMDB
  const popularMovies = async () => {
    try {
      const response = await tmdbMovies.get(tmdbPopularMoviesUrl);
      console.log("Popular Movies:", response.data);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  // Call popularMovies on component mount
  useEffect(() => {
    popularMovies();
  }, []);


  return (
    <>
      <section className="min-h-screen bg-[#111111]">
        <h1 className="text-white">Movies</h1>
      </section>
    </>
  );
};

export default HeroPage;
