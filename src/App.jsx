import { useState } from "react";
import Header from "./components/Header";
import FormModal from "./components/FormModal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconGasto from "./img/nuevo-gasto.svg";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoVali, setPresupuestoVali] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto]);
  };

  return (
  
      <div className={modal && 'fijar' }>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          presupuestoVali={presupuestoVali}
          setPresupuestoVali={setPresupuestoVali}
        />
      

      {presupuestoVali && (
        <>
        <main>
        <ListadoGastos gastos={gastos}/>
        </main>
          <div className="nuevo-gasto">
            <img src={IconGasto} alt="nuevo gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <FormModal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      )}
      </div>
    
  );
}

export default App;
