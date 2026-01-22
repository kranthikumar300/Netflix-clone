import { Route, Routes } from "react-router-dom";
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
      </div>
    </>
  );
}

export default App;
