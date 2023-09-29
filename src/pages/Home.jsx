import Personnages from "../components/Personnages"
import Equipages from "../components/Equipages"
import FruitsDemon from "../components/Fruits_Demon"
import Hakis from "../components/Hakis"
import Lieux from "../components/Lieux"
import Bateaux from "../components/Bateaux"
import Sabres from "../components/Sabres"
import EquipageLuffy from "../assets/images/equipeLuffy.webp"


function Home() {
  return (
    <>
      <Personnages />
      <img
          className="photo-equipeLuffy"
          src={EquipageLuffy}
          alt="photo du personnage"
        />
      <Equipages />
      <Bateaux />
      <FruitsDemon />
      <Sabres />
      <Hakis />
      <Lieux />
    </>
  );
}

export default Home;
