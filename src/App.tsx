import { Route, Routes } from "react-router-dom";
import StartPage from "./Components/StartPage";
import HeroPage from "./Components/HeroPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/heroPage" element={<HeroPage />} />
          <Route path="/movie/:movieid" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
