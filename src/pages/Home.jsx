import Personnages from "../components/Personnages"
import Equipages from "../components/Equipages"
import FruitsDemon from "../components/Fruits_Demon"
import Hakis from "../components/Hakis"
import Lieux from "../components/Lieux"
import Bateaux from "../components/Bateaux"
import Sabres from "../components/Sabres"


function Home() {
  return (
    <>
      <Personnages />
      <Sabres />
      <Equipages />
      <Bateaux />
      <FruitsDemon />
      <Hakis />
      <Lieux />
    </>
  );
}

export default Home;
