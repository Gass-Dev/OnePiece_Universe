import { BrowserRouter, Routes, Route } from "react-router-dom"
// import onePieceLogo from "./assets/images/One_Piece_Black_Logo.png";
import "./App.css";

//import Nav
import Layout from "./pages/Layout"

// import pages
import Home from "./pages/Home"
import NoPage from"./pages/NoPages"
import Personnages from "./pages/Personnages"
import Equipages from "./pages/Equipages"
import Fruits_Demon from "./pages/Fruits_Demon"
import Bateaux from "./pages/Bateaux"
import Lieux from "./pages/Lieux"
import Hakis from "./pages/Hakis"
import Sabres from "./pages/Sabres"
import Episodes from "./pages/Episodes"
import Luffy from "./pages/Luffy"

function App() {

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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

{/* <div>
<img className="LogoHome" src={onePieceLogo} alt="Logo One Piece" />
</div> */}