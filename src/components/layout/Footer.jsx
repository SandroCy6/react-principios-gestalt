import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto bdg-pie-pagina">
      <div className="container text-center bdg-contenedor-pie">
        <h5 className="bdg-texto-principal fw-bold mb-3">🏪 Mi Bodeguita</h5>
        <div className="mb-2 bdg-enlaces-legales">
          <a href="#" className="text-light text-decoration-none mx-2">Términos de servicio</a>
          <span className="text-secondary">|</span>
          <a href="#" className="text-light text-decoration-none mx-2">Política de privacidad</a>
        </div>
        <p className="mb-0 text-secondary small">© 2026 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};