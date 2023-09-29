import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arc from "../components/Arc";
import Sagas from "../components/Sagas";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/episodes")
      .then((response) => {
        setEpisodes(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardEpisodes = episodes.map((episode) => (
    <div key={episode.id} className="fiche-wanted">
      <h2>{episode.number}</h2>
      <h3>{episode.title}</h3>
      <p>{episode.chapter}</p>
      <p>{episode.description}</p>
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
      <div className="episodes">
        <h1>Les épisodes</h1>
        <Slider {...settings}>{cardEpisodes}</Slider>
      </div>

      <div>
        <Arc />
        <Sagas />
      </div>
    </div>
  );
}

export default Episodes;
