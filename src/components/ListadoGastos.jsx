import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar }) => {
    
  return (
    <div className="listado-gastos contenedor ">
        <h2>{gastos.length > 0 ? 'Gastos' : 'No Hay Gastos'}</h2>
      {
      gastos.map(ele =>(
        <Gasto key={ele.id}
        ele={ele}
        setGastoEditar={setGastoEditar}
        />
        ))
      }
    </div>
  );
};

export default ListadoGastos;
