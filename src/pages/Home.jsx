import React from 'react';

const Home = () => {
  const bdgInventario = [
    { id: 'prod-1', nombre: 'Arroz Extra 1kg', precio: 'S/ 4.50' },
    { id: 'prod-2', nombre: 'Aceite Vegetal 1L', precio: 'S/ 12.00' },
    { id: 'prod-3', nombre: 'Leche Evaporada', precio: 'S/ 3.80' },
    { id: 'prod-4', nombre: 'Azúcar Rubia 1kg', precio: 'S/ 4.20' },
  ];

  return (
    <main className="container my-5 bdg-home-envoltura min-vh-100">
      
      {/* Sección Principal */}
      <section className="text-center mb-5 bdg-region-destacada shadow-sm">
        <h1 className="display-4 fw-bolder bdg-texto-principal">¡Tu despensa siempre llena!</h1>
        <p className="lead text-secondary mt-3">Los productos más frescos y al mejor precio, a un paso de tu casa.</p>
        <button className="btn bdg-boton-accion btn-lg mt-4 px-5">Ver Ofertas</button>
      </section>

      {/* Grilla de Productos */}
      <section className="bdg-seccion-productos">
        <h2 className="mb-4 bdg-texto-principal border-bottom border-2 pb-2">Destacados de la semana</h2>
        <div className="row g-4 bdg-grilla-items">
          {bdgInventario.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3 bdg-columna-tarjeta" key={item.id}>
              <div className="card h-100 border-0 shadow-sm bdg-tarjeta-producto">
                {/* Marcador de posición para la imagen */}
                <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                  <span className="text-muted">📷 Imagen</span>
                </div>
                <div className="card-body text-center bdg-cuerpo-tarjeta">
                  <h5 className="card-title fw-bold text-dark">{item.nombre}</h5>
                  <p className="card-text fs-5 fw-bold text-success">{item.precio}</p>
                  <button className="btn btn-outline-dark w-100 mt-3 bdg-btn-comprar">Agregar 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};
export default Home; 