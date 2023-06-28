import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  presupuestoVali,
  setPresupuestoVali,
}) => {
  return (
    <header>
      <h1>Planificador de gastos </h1>

      {presupuestoVali ? (
        <ControlPresupuesto presupuesto={presupuesto} />
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
