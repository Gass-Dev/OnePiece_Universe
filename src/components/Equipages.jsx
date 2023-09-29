import React, { useState, useEffect } from "react";
import axios from "axios";
import EquipageLuffy from "../assets/images/equipage_luffy.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Equipages() {
  const [equipages, setEquipages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/crews")
      .then((response) => {
        setEquipages(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cartesEquipages = equipages
    .filter(
      (equipage) =>
        equipage.number &&
        equipage.number !== "inconnu" &&
        equipage.total_prime &&
        equipage.total_prime !== "inconnu" &&
        equipage.number !== "-" &&
        equipage.total_prime !== "-"
    )
    .map((equipage) => (
      <div key={equipage.id} className="carte-equipage">
        <h2>{equipage.french_name}</h2>
        <img
          className="photo-equipage"
          src={EquipageLuffy}
          alt="photo de l'équipage"
        />
        <p>{equipage.number}</p>
        <h3>{equipage.total_prime}</h3>
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
      <h1>Les équipages</h1>
      <Slider {...settings}>{cartesEquipages}</Slider>{" "}
    </div>
  );
}

export default Equipages;
