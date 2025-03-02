import { useState } from "react";

// -- Componentes -------------------------------------------------
import ListaFamiliaProfesionales from "../componentes/ListaFamiliaProfesionales/ListaFamiliaProfesionales";
import ResultadosBusquedaProyectos from "../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";

const BusquedaProyectos = () => {

    const [listaFamilias,setListaFamilias] = useState([]);

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <ListaFamiliaProfesionales listaFamilias={listaFamilias} setListaFamilias={setListaFamilias} ></ListaFamiliaProfesionales>
            <ResultadosBusquedaProyectos listaFamilias={listaFamilias} ></ResultadosBusquedaProyectos>
        </>
    );
}

export default BusquedaProyectos;