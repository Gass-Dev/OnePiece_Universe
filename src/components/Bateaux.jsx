import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bateaux() {
  const [bateaux, setBateaux] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/boats")
      .then((response) => {
        setBateaux(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardBateaux = bateaux.map((bateau) => (
    <div key={bateau.id} className="card">
      <h2>{bateau.french_name}</h2>
      <p>{bateau.type}</p>
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
      <h1>Les bateaux</h1>
      <Slider {...settings}>{cardBateaux}</Slider>{" "}
    </div>
  );
}

export default Bateaux;
