import ListaPerfilesCompetenciales from "../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaAlumnos from "../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";
import { useState } from "react";

const BusquedaAlumnos = () => {

    const [listaFamilias,setListaFamilias] = useState([]);
    const [listaPerfiles,setListaPerfiles] = useState([]);

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <ListaPerfilesCompetenciales listaFamilias={listaFamilias} setListaFamilias={setListaFamilias} listaPerfiles={listaPerfiles} setListaPerfiles={setListaPerfiles}></ListaPerfilesCompetenciales>
            <ResultadosBusquedaAlumnos listaFamilias={listaFamilias} listaPerfiles={listaPerfiles} ></ResultadosBusquedaAlumnos>
        </>
    )   
}

export default BusquedaAlumnos;