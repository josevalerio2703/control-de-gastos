const Filtros = ({filtros, setFiltros}) => {

  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
            <label htmlFor="">Filtrar Gastos</label>
          <select name="" id=""
          value={filtros}
          onChange={(e)=>setFiltros(e.target.value)}
          >
            <option value="">-- Todos los Gastos --</option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comida </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
