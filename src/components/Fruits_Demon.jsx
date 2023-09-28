import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div key={fruit.id} className="carte-fruit">
      <h2>{fruit.french_name}</h2>
      <p>Type : {fruit.type}</p>
      <p>{fruit.description}</p>
    </div>
  ));

  return (
    <div>
      <h1>Les Fruits du Démon</h1>
      <div className="fiches-container-fruitsDemon">{cartesFruits}</div>
    </div>
  );
}

export default FruitsDuDemon;
