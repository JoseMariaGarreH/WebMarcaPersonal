import { useEffect, useState } from "react";
import getPerfilesCompetenciales from "../servicios/getPerfilesCompetenciales";

const usePerfilesCompetenciales = () =>{

    const [listaPerfilesCompetenciales , setListaPerfilesCompetenciales] = useState([]);


    function loadPerfilesCompetenciales(){
        getPerfilesCompetenciales().then(perfilesCompetenciales => {
            setListaPerfilesCompetenciales(perfilesCompetenciales);
        });
    }

    useEffect(loadPerfilesCompetenciales,[]);


    return { listaPerfilesCompetenciales }
}

export default usePerfilesCompetenciales;