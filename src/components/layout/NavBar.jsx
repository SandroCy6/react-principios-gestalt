import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#A04000" }}
    >
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">
          🏪 Mi Bodeguita
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bdgMenuNavegacion"
          aria-controls="bdgMenuNavegacion"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="bdgMenuNavegacion">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-3" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
