import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormModal from "./components/FormModal";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconGasto from "./img/nuevo-gasto.svg";
import Filtros from "./components/Filtros";
import MapComponent from "./assets/MapComponent";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [presupuestoVali, setPresupuestoVali] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtros, setFiltros] = useState('')
  const [gastosFiltrado, setGastosFiltrado] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setPresupuestoVali(true);
    }
  }, []);

  useEffect(() => {
    
    if (filtros) {
     const filtrados = gastos.filter(ele => ele.categoria === filtros)
     //setGastos(filtrados)
     setGastosFiltrado( filtrados );
    }
  }, [filtros]);

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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoVali={presupuestoVali}
        setPresupuestoVali={setPresupuestoVali}
      />

      {presupuestoVali && (
        <>
          <main>
          <Filtros
          filtros={filtros}
          setFiltros={setFiltros}
          />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGastos={eliminarGastos}
              gastosFiltrado={gastosFiltrado}
              filtros={filtros}
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
