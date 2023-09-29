import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hakis() {
  const [hakis, setHakis] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/hakis")
      .then((response) => {
        setHakis(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardHakis = hakis.map((haki) => (
    <div key={haki.id} className="fiche-hakis">
      <h2 className="nom-personnage">{haki.french_name}</h2>
      <p  className="text-hakis">{haki.description}</p>
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1>Les hakis</h1>
      <Slider {...settings}>{cardHakis}</Slider>{" "}
    </div>
  );
}

export default Hakis;
