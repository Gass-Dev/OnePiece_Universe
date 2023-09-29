import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

function Avis() {
  const [avisList, setAvisList] = useState([]);
  const [nouvelAvis, setNouvelAvis] = useState("");

  useEffect(() => {
    const avisEnregistres = JSON.parse(localStorage.getItem("avisList"));
    if (avisEnregistres) {
      setAvisList(avisEnregistres);
    }
  }, []);

  useEffect(() => {
    if (avisList.length > 0) {
      localStorage.setItem("avisList", JSON.stringify(avisList));
    }
  }, [avisList]);

  // ajouter un avis
  const ajouterAvis = () => {
    if (nouvelAvis.trim() !== "") {
      setAvisList([...avisList, nouvelAvis]);
      setNouvelAvis("");
    }
  };

  // supprimer un avis
  const supprimerAvis = (index) => {
    const nouvelleListe = [...avisList];
    nouvelleListe.splice(index, 1);
    setAvisList(nouvelleListe);
  };

  // configuration video
  const videoOptions = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <div className="avis-container">
      <h1 className="avis-title">On partage nos avis</h1>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Donne ton avis..."
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
      <div className="video">
          <YouTube videoId="z1FGY-Y69U0" opts={videoOptions} />
        </div>
    </div>
  );
}

export default Avis;
