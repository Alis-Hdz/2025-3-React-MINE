import React from "react";

export default function Button({ children, onClick, type, disabled }) {
  return ( 
    <button // En este boton ya incluimos por completo los estilos del boton, en terminos de atomic design, este es un atomo 
      type={type}
      style={{
        padding: "1rem",
        borderRadius: 8,
        border: "1px solid #000",
        background: disabled ? "#fff" : "#c3c3c3",
        color: "#000",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
    >
      {children} 
    </button>
  );
}
