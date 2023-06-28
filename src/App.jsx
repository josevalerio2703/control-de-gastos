import { useEffect, useState } from "react";
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
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setGastoEditar({});
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    if (gasto.id) {
      //actualizar
      const actualizarGasto = gastos.map((ele) =>
        ele.id === gasto.id ? gasto : ele
      );
      setGastos(actualizarGasto);
    } else {
      // crear un nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
  };

  const eliminarGastos = (id) => {
    const gastoEliminado = gastos.filter((ele) => ele.id != id);
    setGastos(gastoEliminado);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoVali={presupuestoVali}
        setPresupuestoVali={setPresupuestoVali}
      />

      {presupuestoVali && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGastos={eliminarGastos}
            />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
