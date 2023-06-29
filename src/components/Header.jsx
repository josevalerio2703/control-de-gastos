import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  presupuestoVali,
  setPresupuestoVali,
}) => {
  return (
    <header>
      <h1>Planificador de gastos </h1>

      {presupuestoVali ? (
        <ControlPresupuesto 
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setPresupuestoVali={setPresupuestoVali}
         />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          presupuestoVali={presupuestoVali}
          setPresupuestoVali={setPresupuestoVali}
        />
      )}
    </header>
  );
};

export default Header;
