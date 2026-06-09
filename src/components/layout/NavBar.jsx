import React from 'react';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bdg-fondo-principal shadow-sm">
      <div className="container bdg-nav-contenedor">
        <a className="navbar-brand text-white fw-bold fs-4" href="#">
          🏪 Mi Bodeguita
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bdgMenuNavegacion">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bdgMenuNavegacion">
          <ul className="navbar-nav ms-auto bdg-lista-enlaces">
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};