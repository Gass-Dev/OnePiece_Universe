import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arcs() {
  const [arcs, setArcs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/arcs")
      .then((response) => {
        setArcs(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const cardArcs = arcs.map((arc) => (
    <div key={arc.id} className="fiche-wanted">
      <h2>{arc.arc_title}</h2>
      <p>{arc.arc_description}</p>
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
    <div className="arcs">
      <h1>Les arcs</h1>
      <Slider {...settings}>{cardArcs}</Slider>
    </div>
  );
}

export default Arcs;