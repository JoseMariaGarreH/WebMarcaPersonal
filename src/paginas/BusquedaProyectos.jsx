import ListaFamiliaProfesionales from "../componentes/ListaFamiliaProfesionales/ListaFamiliaProfesionales";
import ResultadosBusquedaProyectos from "../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";
import { useState } from "react";
import { useContext } from "react";
import IdiomaContext from "../contextos/IdiomaContext";

const BusquedaProyectos = () => {

    const { idioma } = useContext(IdiomaContext);
    const [listaFamilias,setListaFamilias] = useState([]);

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <ListaFamiliaProfesionales idioma={idioma} listaFamilias={listaFamilias} setListaFamilias={setListaFamilias} ></ListaFamiliaProfesionales>
            <ResultadosBusquedaProyectos idioma={idioma} listaFamilias={listaFamilias}></ResultadosBusquedaProyectos>
        </>
    );
}

export default BusquedaProyectos;