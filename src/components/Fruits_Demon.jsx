import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FruitsDuDemon() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/fruits")
      .then((response) => {
        setFruits(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cartesFruits = fruits.map((fruit) => (
    <div key={fruit.id} className="fiche-wanted card-fruit">
      <h2>{fruit.french_name}</h2>
      <p>Type : {fruit.type}</p>
      <p>{fruit.description}</p>
    </div>
  ));

  // Configuration du carrousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1>Les Fruits du Démon</h1>
      <Slider {...settings}>{cartesFruits}</Slider>{" "}
    </div>
  );
}

export default FruitsDuDemon;
