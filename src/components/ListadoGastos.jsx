import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGastos,
  gastosFiltrado,
  filtros,
}) => {
  return (
    <div className="listado-gastos contenedor ">
      {filtros ? (
        <>
          <h2>
            {gastosFiltrado.length > 0 ? "Gastos" : "No Hay Gastos con Esa Categoria"}
          </h2>
          {gastosFiltrado.map((ele) => (
            <Gasto
              key={ele.id}
              ele={ele}
              setGastoEditar={setGastoEditar}
              eliminarGastos={eliminarGastos}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length > 0 ? "Gastos" : "No Hay Gastos"}</h2>
          {gastos.map((ele) => (
            <Gasto
              key={ele.id}
              ele={ele}
              setGastoEditar={setGastoEditar}
              eliminarGastos={eliminarGastos}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
