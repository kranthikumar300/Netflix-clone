import { useEffect } from "react";
import { tmdbMovies, tmdbPopularMoviesVideos } from "../Utils/axiosInstance";
import { CiPlay1 } from "react-icons/ci";
import { RiInformationLine } from "react-icons/ri";
import netflixLogo from "/Netflix-Logo.png";

// Define props from the HeroPage
interface HeroVideoProps {
  title: string;
  overview: string;
}

const HeroVideoPlay = ({ title, overview }: HeroVideoProps) => {
  // useEffect Hook
  useEffect(() => {
    //function for fetching the video Reponse
    const popularMovieTrailer = async () => {
      try {
        const response = await tmdbMovies.get(tmdbPopularMoviesVideos);
        console.log(response.data);
      } catch (err) {
        console.log("failed to fetch trailer", err);
      }
    };

    // Calling popularMovieTrailer Here
    popularMovieTrailer();
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-[#111111] overflow-hidden">
        {/*Netlix Logo*/}
        <div className="relative w-full h-auto z-30 bg-white">
          <img
            src={netflixLogo}
            alt="Netflix-Logo"
            className="absolute top-10 left-20 w-52 h-auto"
          />
        </div>

        {/*Movie Trailer*/}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          <iframe
            className="w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/yeR5bcbRPak?si=TnlWVvJb5-PsVEej&amp;controls=0&autoplay=1&mute=1&modestbranding=1&showinfo=0&loop=1&&playlist=yeR5bcbRPak"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/*from left to right Overlay on above Hero*/}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"></div>

        {/*Movie Details */}
        <div className="absolute top-1/3 left-20 space-y-8 p-4 z-20 max-w-2xl">
          <h2 className="text-white text-5xl font-bold">{title}</h2>
          <p className="text-white text-start max-w-96">{overview}</p>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 px-10 py-3 bg-white font-medium rounded-md cursor-pointer">
              <CiPlay1 className="w-4 h-4" />
              Play
            </button>
            <button className="flex items-center gap-1 px-10 py-3 bg-white font-medium rounded-md cursor-pointer">
              <RiInformationLine className="w-4 h-4" />
              Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVideoPlay;
