import React, { useState, useEffect } from "react";

function Avis() {
  const [avisList, setAvisList] = useState([]);
  const [nouvelAvis, setNouvelAvis] = useState("");

  useEffect(() => {
    const avisEnregistres = JSON.parse(localStorage.getItem("avisList")) || [];
    setAvisList(avisEnregistres);
  }, []);

  useEffect(() => {
    localStorage.setItem("avisList", JSON.stringify(avisList));
  }, [avisList]);

  // ajouter un avis
  const ajouterAvis = () => {
    if (nouvelAvis.trim() !== "") {
      setAvisList([...avisList, nouvelAvis]);
      setNouvelAvis("");
    }
  };

  // supprimer un avi
  const supprimerAvis = (index) => {
    const nouvelleListe = [...avisList];
    nouvelleListe.splice(index, 1);
    setAvisList(nouvelleListe);
  };

  return (
    <div>
      <h1>On partage nos avis</h1>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Ajouter un avis..."
          value={nouvelAvis}
          onChange={(e) => setNouvelAvis(e.target.value)}
        />
        <button className="buttonInput" onClick={ajouterAvis}>
          +
        </button>
      </div>
      <ul>
        {avisList.map((avis, index) => (
          <li key={index}>
            {avis}
            <button
              className="buttonInput"
              onClick={() => supprimerAvis(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Avis;
