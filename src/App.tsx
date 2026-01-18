import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import StartPage from "./Components/StartPage";
import HeroPage from "./Components/HeroPage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/heroPage" element={<HeroPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
