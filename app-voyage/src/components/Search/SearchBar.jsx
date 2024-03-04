import React from "react";
import "./SearchBar.css"; // Assurez-vous que le fichier CSS correspondant est bien relié

const SearchBar = () => {
  return (
    <div className="Body">
      <div className="content">
        <h1 className="Titre">Découvrez de Nouveau Horizons</h1>
      </div>
      <div className="search-form">
        <div className="search-form-group">
          <input type="text" placeholder="Où souhaitez-vous voyager?" />
          <input type="date" placeholder="Date de départ" />
          <input type="date" placeholder="Date de retour" />
          <select>
            <option value="1">1 adulte</option>
            <option value="2">2 adultes</option>
            <option value="3">2 adultes, 1 enfant</option>
            <option value="4">2 adultes, 2 enfants</option>
          </select>
          <button>Rechercher</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
