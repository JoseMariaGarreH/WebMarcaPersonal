import { useEffect, useState } from "react";
import getFamiliasProfesionales from "../servicios/getFamiliasProfesionales";

const useFamiliasProfesionales = () =>  {    

    const [listaFamiliaProfesionales, setListaFamiliaPorfesionales] = useState([]);

    function obtenerFamiliasProfesionales(){
        getFamiliasProfesionales().then(familiaProfesional => {
            setListaFamiliaPorfesionales(familiaProfesional);
        });               
    }

    useEffect(obtenerFamiliasProfesionales, []);

    return {listaFamiliaProfesionales}
}

export default useFamiliasProfesionales;