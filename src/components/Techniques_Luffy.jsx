import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Techniques() {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/luffy/techniques")
      .then((response) => {
        setTechniques(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardTechniques = techniques.map((technique) => (
    <div key={technique.id} className="fiche-wanted card-technique">
      <h2>{technique.name}</h2>
      <p>{technique.description}</p>
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
      <h1>Les techniques</h1>
      <Slider {...settings}>{cardTechniques}</Slider>{" "}
    </div>
  );
}

export default  Techniques;
