import ContactForm from "../components/ui/ContactForm";

const Contacto = () => {
  return (
    <div>
      {/* Hero pequeño */}
      <div
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#A04000" }}
      >
        <div className="container">
          <h1 className="fw-bold mb-2">Contáctanos</h1>
          <p className="mb-0 opacity-75">Estamos aquí para ayudarte</p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Info de contacto */}
          <div className="col-md-5">
            <h2 className="fw-bold mb-3" style={{ color: "#A04000" }}>
              Información
            </h2>
            <p className="text-secondary mb-4">
              Puedes contactarnos por cualquiera de estos medios. Respondemos en
              menos de 24 horas.
            </p>

            <div className="d-flex align-items-start mb-3 gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0"
                style={{
                  backgroundColor: "#A04000",
                  width: "40px",
                  height: "40px",
                }}
              >
                📍
              </div>
              <div>
                <p className="fw-semibold mb-0">Dirección</p>
                <p className="text-secondary mb-0">
                  Av. Principal 123, Ica, Perú
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3 gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0"
                style={{
                  backgroundColor: "#A04000",
                  width: "40px",
                  height: "40px",
                }}
              >
                📞
              </div>
              <div>
                <p className="fw-semibold mb-0">Teléfono</p>
                <p className="text-secondary mb-0">+51 999 888 777</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3 gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0"
                style={{
                  backgroundColor: "#A04000",
                  width: "40px",
                  height: "40px",
                }}
              >
                ✉️
              </div>
              <div>
                <p className="fw-semibold mb-0">Correo</p>
                <p className="text-secondary mb-0">contacto@mitienda.com</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0"
                style={{
                  backgroundColor: "#A04000",
                  width: "40px",
                  height: "40px",
                }}
              >
                🕐
              </div>
              <div>
                <p className="fw-semibold mb-0">Horario</p>
                <p className="text-secondary mb-0">
                  Lun - Sáb, 9:00am - 7:00pm
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-md-7">
            <div
              className="p-4 rounded-3 shadow-sm"
              style={{
                backgroundColor: "#fff8f4",
                border: "1px solid #e8d5cc",
              }}
            >
              <h3 className="fw-bold mb-4" style={{ color: "#2D2D2D" }}>
                Envíanos un mensaje
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
