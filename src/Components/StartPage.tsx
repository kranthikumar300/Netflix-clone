import Herobg from "/start-Hero-Img.jpg";
import netflixLogo from "/Netflix-Logo.png";

const StartPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Hero Background Image */}
        <img
          src={Herobg}
          alt="Hero-Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Hero Content */}
        <div className="relative flex justify-between items-center p-1 px-32">
          <img src={netflixLogo} alt="Netflix-Logo" className="w-52 h-auto" />
          <button className="bg-red-500 px-4 py-1 text-white font-semibold rounded-sm cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Centered Text and Input */}
        <div className="relative flex flex-col justify-center items-center text-center min-h-screen gap-5 px-4">
          <h1 className="font-bold text-white text-6xl text-center max-w-lg">
            Unlimited movies, shows, and more
          </h1>
          <p className="font-bold text-2xl text-white text-center">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="font-light text-xl text-white text-center mt-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Input */}
          <div className="flex gap-5">
            <input
              type="email"
              placeholder="Gmail Address"
              className="border-2 border-gray-400 text-white px-4 py-3 rounded-sm w-96 focus:outline-none"
            />

            {/* Button Get Started */}
            <button className="bg-red-500 py-1 px-4 text-white font-semibold rounded-sm cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartPage;
