import { useEffect, useState } from "react";

// -- Servicios -------------------------------------------------
import getPerfilesCompetenciales from "../servicios/getPerfilesCompetenciales";

const usePerfilesCompetenciales = () =>{

    // Guardamos en un estado la lista de perfiles competenciales
    const [listaPerfilesCompetenciales , setListaPerfilesCompetenciales] = useState([]);

    function obtenerPerfilesCompetenciales(){
        // Llamamos al servicio que nos devuelve los perfiles competenciales
        getPerfilesCompetenciales().then(perfilesCompetenciales => {
            // Guardamos en el estado la lista de perfiles competenciales
            setListaPerfilesCompetenciales(perfilesCompetenciales);
        });
    }

    // Llamamos a la función que obtiene los perfiles competenciales cuando se renderiza el componente
    useEffect(obtenerPerfilesCompetenciales,[]);

    // Devolvemos los valores que queremos exponer en el hook
    return { listaPerfilesCompetenciales }
}

export default usePerfilesCompetenciales;