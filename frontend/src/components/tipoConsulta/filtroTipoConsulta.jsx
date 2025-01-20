import React from "react";

const FiltroTipoConsulta = ({ filtro, onFiltroChange }) => {
  return (
    <div className="tipo-consulta-form">
      <input
        type="text"
        name="filtro"
        placeholder="Pesquisar por código, nome, descrição ou outras informações"
        value={filtro}
        onChange={onFiltroChange}
      />
    </div>
  );
};

export default FiltroTipoConsulta;
