import LuffyImg from "../assets/images/luffy.png";
import Techniques from "../components/Techniques_Luffy";
import Gear from "../components/Gear_Luffy";
import YouTube from "react-youtube";

function Luffy() {
  // configuration video
  const videoOptions = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };
  return (
    <>
      <div>
        <h1>Luffy</h1>
        <img
          className="photo-personnage"
          src={LuffyImg}
          alt="photo du personnage"
        />
        <Techniques />
        <Gear />
        <div className="video">
          <YouTube videoId="P_ZqeTDgwKo" opts={videoOptions} />
        </div>
      </div>
    </>
  );
}

export default Luffy;
