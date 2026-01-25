import { Route, Routes } from "react-router-dom";
import StartPage from "./Components/StartPage";
import HeroPage from "./Components/HeroPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import SignInForm from "./Components/SignInForm";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/heroPage" element={<HeroPage />} />
          <Route path="/movie/:movieid" element={<MovieDetailsPage />} />
          <Route path="/sign" element={<SignInForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
