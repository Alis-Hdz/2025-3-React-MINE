import { useState } from "react";

export default function SearchResults() {
  const query = (searchParams.get("q") || "").trim();
  const hasQuery = query.lenght > 0;
  const [sortBy, setSortBy] = usertState();
  const [sortOrder, setSortOrder] = useState();
  return (
    <div className="search-results">
      <header className="search-results-header">
        <div>
          <h1 className="search-results-title">
            {hasQuery ? "Resultados para ${query}" : "Explora nuestro catálogo"}
          </h1>

          <p className="search-results-description">
            {hasQuery
              ? "Estos son los productos que encontramos basados en tu busqueda"
              : "Usa la barra de busqueda para encontrar rápidamente lo que necesitas"}
          </p>
        </div>
      </header>
      {hasQuery && (
        <div className="search-results-controls">
          <label>Ordenar por:</label>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
          </select>

          <button
            type="button"
            className="sort-btn"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          ></button>
        </div>
      )}
    </div>
  );
}
