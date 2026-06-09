import { useState } from "react";

const ContactForm = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {enviado && (
        <div
          className="alert"
          style={{
            backgroundColor: "#fff3e0",
            color: "#A04000",
            border: "1px solid #A04000",
          }}
        >
           Mensaje enviado correctamente. ¡Gracias!
        </div>
      )}

      <div className="mb-3">
        <label className="form-label fw-semibold">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tu nombre completo"
          required
          style={{ borderColor: "#ccc" }}
          onFocus={(e) => (e.target.style.borderColor = "#A04000")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          placeholder="correo@ejemplo.com"
          required
          style={{ borderColor: "#ccc" }}
          onFocus={(e) => (e.target.style.borderColor = "#A04000")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Asunto</label>
        <input
          type="text"
          className="form-control"
          placeholder="¿En qué podemos ayudarte?"
          required
          style={{ borderColor: "#ccc" }}
          onFocus={(e) => (e.target.style.borderColor = "#A04000")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">Mensaje</label>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Escribe tu mensaje aquí..."
          required
          style={{ borderColor: "#ccc", resize: "none" }}
          onFocus={(e) => (e.target.style.borderColor = "#A04000")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </div>

      <button
        type="submit"
        className="btn w-100 text-white fw-semibold py-2"
        style={{ backgroundColor: "#A04000" }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#7A2F00")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#A04000")}
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
