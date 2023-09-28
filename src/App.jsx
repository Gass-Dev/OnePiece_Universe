import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//import Nav
import Layout from "./pages/Layout";

// import pages
import Home from "./pages/Home";
import NoPage from "./pages/NoPages";
import Univers from "./pages/Univers";
import Personnages from "./components/Personnages";
import Equipages from "./components/Equipages";
import Fruits_Demon from "./components/Fruits_Demon";
import Bateaux from "./components/Bateaux";
import Lieux from "./components/Lieux";
import Hakis from "./components/Hakis";
import Sabres from "./components/Sabres";
import Episodes from "./pages/Episodes";
import Luffy from "./pages/Luffy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="univers" element={<Univers />} />
            <Route path="personnages" element={<Personnages />} />
            <Route path="equipages" element={<Equipages />} />
            <Route path="fruits_demon" element={<Fruits_Demon />} />
            <Route path="bateaux" element={<Bateaux />} />
            <Route path="lieux" element={<Lieux />} />
            <Route path="hakis" element={<Hakis />} />
            <Route path="sabres" element={<Sabres />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="luffy" element={<Luffy />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
