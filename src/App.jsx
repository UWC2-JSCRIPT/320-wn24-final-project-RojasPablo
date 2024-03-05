import "./StylingFolder/App.css";
import "./StylingFolder/Adopt.css";
import "./StylingFolder/Gallery.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdoptPage from "./HomeComponents/Adopt-Page";
import Gallery from "./Pages/Gallery";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adopt" element={<AdoptPage />} /> 
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
