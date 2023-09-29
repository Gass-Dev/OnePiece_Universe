import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sagas() {
  const [sagas, setSagas] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/sagas")
      .then((response) => {
        setSagas(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardSagas = sagas.map((saga) => (
    <div key={saga.id} className="fiche-wanted">
      <h2>Numero: {saga.saga_number}</h2>
      <h3>{saga.saga_title}</h3>
      <h4>Chapître: {saga.saga_chapitre}</h4>
      <h5>Volume: {saga.saga_volume}</h5>
      <h6>Épisodes: {saga.saga_episode}</h6>
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
    <div className="sagas">
      <h1>Les Sagas</h1>
      <Slider {...settings}>{cardSagas}</Slider>
    </div>
  );
}

export default Sagas;