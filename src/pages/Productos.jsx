import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ui/ProductCard";

const categorias = ["Todas", ...new Set(products.map((p) => p.categoria))];

const Productos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const filtrados =
    categoriaActiva === "Todas"
      ? products
      : products.filter((p) => p.categoria === categoriaActiva);

  return (
    <div>
      {/* Hero pequeño */}
      <div
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#A04000" }}
      >
        <div className="container">
          <h1 className="fw-bold mb-2">Nuestros Productos</h1>
          <p className="mb-0 opacity-75">
            Encuentra lo que estás buscando al mejor precio
          </p>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="container py-4">
        <div className="d-flex gap-2 flex-wrap mb-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className="btn btn-sm"
              style={{
                backgroundColor:
                  categoriaActiva === cat ? "#A04000" : "transparent",
                color: categoriaActiva === cat ? "#fff" : "#A04000",
                border: "1px solid #A04000",
                borderRadius: "20px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filtrados.map((product) => (
            <div key={product.id} className="col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-5 text-muted">
            <p className="fs-5">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productos;
