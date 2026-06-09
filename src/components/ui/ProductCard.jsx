const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={product.imagen}
        className="card-img-top"
        alt={product.nombre}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <span
          className="badge mb-2 align-self-start"
          style={{ backgroundColor: "#A04000", fontSize: "0.75rem" }}
        >
          {product.categoria}
        </span>
        <h5 className="card-title fw-bold text-dark">{product.nombre}</h5>
        <p className="card-text text-secondary small flex-grow-1">
          {product.descripcion}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold fs-5" style={{ color: "#A04000" }}>
            S/ {product.precio.toFixed(2)}
          </span>
          <button
            className="btn btn-sm text-white"
            style={{ backgroundColor: "#A04000" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7A2F00")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#A04000")}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
