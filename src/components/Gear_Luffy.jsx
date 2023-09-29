import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gears() {
  const [gears, setGears] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/luffy/Gears")
      .then((response) => {
        setGears(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardGears = gears.map((gear) => (
    <div key={gear.id} className="fiche-wanted card-gear">
      <h2>{gear.name}</h2>
      <p>{gear.description}</p>
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
      <h1>Les Gears</h1>
      <Slider {...settings}>{cardGears}</Slider>{" "}
    </div>
  );
}

export default  Gears;
