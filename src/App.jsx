import { useState, useEffect } from "react";
import Formulario from "./component/Formulario";
import Header from "./component/Header";
import ListadoPacientes from "./component/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      //console.log( typeof pacientesLS);
      setPacientes(pacientesLS)
    }

    obtenerLS();
  }, [])

  useEffect(() => {
    //console.log("Componente listo");
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    //console.log("eliminando paciente ", id);
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
