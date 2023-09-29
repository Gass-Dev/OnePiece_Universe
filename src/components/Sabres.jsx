import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sabres() {
  const [sabres, setSabres] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/boats")
      .then((response) => {
        setSabres(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardSabres = sabres.map((sabre) => (
    <div key={sabre.id} className="card">
      <h2>{sabre.french_name}</h2>
      <p>{sabre.type}</p>
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
      <h1>Les Sabres</h1>
      <Slider {...settings}>{cardSabres}</Slider>
    </div>
  );
}

export default Sabres;
