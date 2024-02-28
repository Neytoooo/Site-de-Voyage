import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/Sans titre.png" alt="logo" className="logo" />
        <h1>Voyanage</h1>
      </div>
      <div className="buttons-container">
        <button className="btn">Se Connecter</button>
        <button className="btn btn-primary">S'inscrire</button>
      </div>
    </nav>
  );
};

export default NavBar;
