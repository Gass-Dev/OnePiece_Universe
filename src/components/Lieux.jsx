import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Lieux() {
  const [lieux, setLieux] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/locates")
      .then((response) => {
        setLieux(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardLieux = lieux.map((lieu) => (
    <div key={lieu.id} className="fiche-wanted">
      <h2>{lieu.french_name}</h2>
      <p>{lieu.sea_name}</p>
    </div>
  ));

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
      <h1>Les lieux</h1>
      <Slider {...settings}>{cardLieux}</Slider>{" "}
    </div>
  );
}

export default Lieux;
