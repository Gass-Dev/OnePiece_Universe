import React, { useState, useEffect } from "react";
import axios from "axios";
import Luffy from "../assets/images/Luffy.png";

function Personnage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Utilisation d'Axios pour effectuer la requête API
    axios
      .get("https://api.api-onepiece.com/characters")
      .then((response) => {
        // Met à jour l'état avec les données des personnages
        setCharacters(response.data);
      })
      .catch((error) => console.error(error));
  }, []); // Le tableau vide [] signifie que cela se produit une seule fois lors du montage du composant

  const fichesWanted = characters
    .filter((character) => character.bounty && character.bounty !== "inconnu") // Filtrer les personnages avec une prime définie
    .map((character) => (
      <div key={character.id} className="fiche-wanted">
        <div className="texte-wanted">Wanted</div>
        <div className="nom-personnage">{character.french_name}</div>
        <div className="job">{character.job}</div>
        <img
          className="photo-personnage"
          src={Luffy}
          alt="photo du personnage"
        />
        <div className="prime">Prime : {character.bounty}</div>
      </div>
    ));

  return (
    <div>
      <h1>Les personnages</h1>
      <div className="fiches-container">{fichesWanted}</div>
    </div>
  );
}

export default Personnage;
