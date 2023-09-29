import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick"; // Importe le composant Slider de react-slick
import "slick-carousel/slick/slick.css"; // Importe les styles de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Importe les styles du thème de slick-carousel
import Luffy from "../assets/images/Luffy.png";

function Personnage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const fichesWanted = characters
    .filter((character) => character.bounty && character.bounty !== "inconnu")
    .map((character) => (
      <div key={character.id} className="fiche-wanted">
        <div className="texte-wanted">Wanted</div>
        <div className="nom-personnage">{character.french_name}</div>
        <div className="job">{character.job}</div>
        <img
          className="photo-personnage"
          src={Luffy}
          alt="photo du personnage"
        />
        <div className="prime">Prime : {character.bounty}</div>
      </div>
    ));

  // Configuration du carrousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>{fichesWanted}</Slider>{" "}
    </div>
  );
}

export default Personnage;
