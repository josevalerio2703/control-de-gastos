import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
import IconCerrar from "../img/cerrar.svg";

const FormModal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGastos,
  gastoEditar,
  setGastoEditar
}) => {
  const [mensaje, setMensaje] = useState("");
  const [form, setForm] = useState({
    gasto: "",
    cantidad: "",
    categoria: "",
  });

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setForm(gastoEditar);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { gasto, cantidad, categoria } = form;

    if ([gasto, categoria].includes("") || cantidad < 0) {
      setMensaje("Todos los Camos son Obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGastos(form);
    ocultarModal();
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={IconCerrar} alt="IconCerrar" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{form.gasto ? "Editar gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="gasto">Nombre del Gasto</label>

          <input
            type="text"
            id="gasto"
            placeholder={
              mensaje ? "El Campo es Obligatoriro" : "Ingrese gasto del Gasto"
            }
            name="gasto"
            value={form.gasto}
            onChange={handleOnChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            type="number"
            id="cantidad"
            placeholder="Ingrese Cantidad"
            name="cantidad"
            value={form.cantidad}
            onChange={(e) =>
              setForm({ ...form, cantidad: Number(e.target.value) })
            }
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            name="categoria"
            id="categoria"
            value={form.categoria}
            onChange={handleOnChange}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comida </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
          </select>
        </div>

        <input
          type="submit"
          value={form.gasto ? "Guardar cambios" : "Nuevo Gasto"}
        />
      </form>
    </div>
  );
};

export default FormModal;
